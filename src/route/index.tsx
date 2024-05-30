import { Route, Routes, Outlet } from 'react-router-dom';

import {
  UserMyPage,
  TimetablePage,
  LecturePage,
  CurationPage,
  ErrorPage,
  LoginPage,
  LogoutPage,
  MainPage,
  SearchPage,
  RegisterPage,
  NoticePage,
  WritePage,
} from '../pages/index';
import { RenderTriggerProvider } from '../contexts/RenderTriggerContext';
import { Layout, Modallike } from '../components';

export function RouteComponent() {
  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/" element={<MainPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/curation" element={<CurationPage />} />
        <Route path="/mypage" element={<UserMyPage />} />
        <Route path="/timetable" element={<TimetablePage />} />
        <Route path="/lecture/:id" element={<LecturePage />} />
        <Route path="/lecture/:id/write" element={<WritePage />} />

        <Route path="/lecture" element={<SearchPage />} />

        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route
        element={
          <RenderTriggerProvider>
            <Modallike>
              <Outlet />
            </Modallike>
          </RenderTriggerProvider>
        }
      >
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}
