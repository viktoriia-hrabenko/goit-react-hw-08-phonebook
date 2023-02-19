import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import SharedLayout from './SharedLayout/SharedLayout';
import PrivateRoute from './Menu/PrivateRoute';
import PublicRoute from './Menu/PublicRoute';

const HomePage = lazy(() => import('../pages/Home'));
const Phonebook = lazy(() => import('../pages/Phonebook'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegistrationPage = lazy(() => import('../pages/Registration'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              redirectTo="/phonebook"
              restricted
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/phonebook"
              restricted
              component={<RegistrationPage />}
            />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;