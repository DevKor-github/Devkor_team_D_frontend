import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import { CloseIcon } from '../../icons';
import { useSessionId } from '../../contexts/SessionIdContext';
import { Spacer, VStack, HStack, Toggle, A, Button, Textfield } from '../../components';

export function LoginPage() {
  const [input, setInput] = useState({
    id: '',
    password: '',
  });

  const navigate = useNavigate();
  const { setSessionId } = useSessionId();

  const [saveLoginInfo, setSaveLoginInfo] = useState(false);
  const [loginError, setLoginError] = useState(false);

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInput({
      ...input,
      [event.target.id]: event.target.value,
    });
  }

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
    <HStack type="left" gap="10px">
      <VStack>
        <Spacer />
        <Button style="blank" onClick={() => navigate(-1)}>
          <CloseIcon width="24px" height="24px" />
        </Button>
      </VStack>
      <HStack gap="10px">
        <Textfield id="id" placeholder="이메일을 입력해주세요" onChange={handleInput} value={input.id} />
        <Textfield
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInput}
          errorMessage="비밀번호가 일치하지 않습니다."
          value={input.password}
          isError={loginError}
        />
      </HStack>
      <VStack>
        <Toggle value={saveLoginInfo} onClick={() => setSaveLoginInfo(!saveLoginInfo)} label="로그인 정보 저장" />
        <Spacer />
        <A href="/login/find-password">비밀번호 찾기</A>
      </VStack>
      <Button style="filled" accnet="0" variant="contained" color="primary" onClick={handleLogin}>
        로그인
      </Button>
      아이디가 없으신가요?
      <A href="/register">회원가입</A>
    </HStack>
  );
}
