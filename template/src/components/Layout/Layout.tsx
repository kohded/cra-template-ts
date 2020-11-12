import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <>
    <Container isFullWidth role="banner">
      <Header />
    </Container>
    <Container role="main">
      <main>{children}</main>
    </Container>
    <Container isFullWidth role="contentinfo">
      <Footer />
    </Container>
  </>
);
