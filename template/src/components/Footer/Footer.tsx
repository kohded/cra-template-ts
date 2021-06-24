import React from 'react';
import { APP_NAME } from '../../common/constants';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

export const Footer = (): JSX.Element => (
  <LayoutContainer role="contentinfo" Tag="footer">
    <p>Copyright &#xA9; {`${new Date().getFullYear()} ${APP_NAME}`}</p>
  </LayoutContainer>
);
