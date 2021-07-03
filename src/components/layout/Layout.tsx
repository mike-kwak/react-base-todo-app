import { Container, CssBaseline } from '@material-ui/core';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <>
      <CssBaseline />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Container maxWidth="lg" style={{ flexGrow: 1 }}>
          <main role="main" style={{ margin: '1.6rem 0' }}>
            {children}
          </main>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
