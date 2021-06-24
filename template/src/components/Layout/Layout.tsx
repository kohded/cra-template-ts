import React, { PropsWithChildren, Suspense } from 'react';
import { lazyComponent } from '../../common/utils';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Loading } from '../Loading/Loading';

const Footer = lazyComponent('Footer', import('../Footer/Footer'));
const Header = lazyComponent('Header', import('../Header/Header'));

const Container = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>{children} </Suspense>
  </ErrorBoundary>
);

export const Layout = ({ children }: PropsWithChildren<Record<string, unknown>>): JSX.Element => (
  <>
    <Container>
      <Header />
    </Container>
    <Container>{children}</Container>
    <Container>
      <Footer />
    </Container>
  </>
);
