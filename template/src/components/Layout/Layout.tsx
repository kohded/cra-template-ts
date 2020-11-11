import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import classes from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <>
    <div className={classes.header} role="banner">
      <Container>
        <Header />
      </Container>
    </div>
    <div className={classes.main} role="main">
      <Container>
        <main>{children}</main>
      </Container>
    </div>
    <div className={classes.footer} role="contentinfo">
      <Container>
        <Footer />
      </Container>
    </div>
  </>
);
