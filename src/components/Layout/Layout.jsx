import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import { Container, Header, Logo, Links } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>TMDB</Logo>
          <nav>
            <Links to="/" end>
              Home
            </Links>
            <Links to="/movies">Movie</Links>
          </nav>
        </Header>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default Layout;
