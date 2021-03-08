import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { lazyComponent } from '../../common/utils';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

interface LayoutProps {
  children: ReactNode;
}

const Footer = lazyComponent('Footer', import('../../components/Footer/Footer'));
const Header = lazyComponent('Header', import('../../components/Header/Header'));

export const Layout: FC<LayoutProps> = ({ children }: PropsWithChildren<LayoutProps>) => (
  <>
    <ErrorBoundary>
      <LayoutContainer role="banner" Tag="header">
        <Header />
      </LayoutContainer>
    </ErrorBoundary>
    <ErrorBoundary>
      <LayoutContainer role="main" Tag="main">
        {children}
      </LayoutContainer>
    </ErrorBoundary>
    <ErrorBoundary>
      <LayoutContainer role="contentinfo" Tag="footer">
        <Footer />
      </LayoutContainer>
    </ErrorBoundary>
  </>
);
