import React, { PropsWithChildren } from 'react';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
};
