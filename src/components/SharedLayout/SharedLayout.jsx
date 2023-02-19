import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Container, Header } from './SharedLayout.styled';
import Navigation from 'components/Menu/Navigation/Navigation';
import UserMenu from 'components/Menu/UserMenu/UserMenu';
import AuthNav from 'components/Menu/AuthNav/AuthNav';
import { useSelector } from 'react-redux';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;