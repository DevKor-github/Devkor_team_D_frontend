import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { CloseIcon, LogoIcon } from '../../icons';
import { ignore } from '../../helper';
import { useSessionId } from '../../contexts/SessionIdContext';
import { triggerWhenRendered } from '../../contexts/RenderTriggerContext';
import { VStack, HStack, Toggle, A, Button, Input, TextField } from '../../components';

export function LoginPage() {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });

  const navigate = useNavigate();
  const { setSessionId } = useSessionId();

  const [saveLoginInfo, setSaveLoginInfo] = useState(false);
  const [loginError, setLoginError] = useState(false);

  triggerWhenRendered();

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  }

  ignore(Input, loginError);

  async function handleLogin() {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, input, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        window.alert('로그인이 완료되었습니다.');
        setSessionId('sesssionId from backend server');
        navigate('/');
      }
    } catch (e) {
      window.alert('로그인에 실패했습니다.');
      setLoginError(true);
    }
  }

  return (
    <HStack type="left" gap="32px" style={{ width: '400px' }}>
      <VStack style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button style="blank" onClick={() => navigate('/')}>
          <VStack gap="4px" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <LogoIcon /> Academ
          </VStack>
        </Button>
        <Button style="blank" onClick={() => navigate('/')}>
          <CloseIcon width="16px" height="16px" />
        </Button>
      </VStack>

      <form
        method="post"
        action="/login/api"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <HStack gap="30px">
          <TextField required id="id" placeholder="example@korea.ac.kr" onChange={handleInput} value={input.id} />
          <TextField
            required
            id="password"
            type="password"
            placeholder="비밀번호"
            onChange={handleInput}
            isError={loginError}
            errorMessage={'이메일 주소 또는 비밀번호가 일치하지 않습니다.'}
            value={input.password}
          />
          <VStack style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Toggle
              value={saveLoginInfo}
              onClick={(event: React.FormEvent<HTMLDivElement>) => {
                event.stopPropagation();
                setSaveLoginInfo(!saveLoginInfo);
              }}
              label="로그인 정보 저장"
            />
            <A href="/login/find-password">비밀번호 찾기</A>
          </VStack>
        </HStack>
        <HStack gap="30px" style={{ marginTop: '50px' }}>
          <Button type="submit" style="filled" accnet="0" variant="contained" color="primary">
            로그인
          </Button>
          <VStack gap="10px" style={{ display: 'flex', justifyContent: 'center' }}>
            계정이 없으신가요?
            <A href="/register">회원가입</A>
          </VStack>
        </HStack>
      </form>
    </HStack>
  );
}
