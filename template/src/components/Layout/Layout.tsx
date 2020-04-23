import React, { PropsWithChildren } from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: PropsWithChildren<Props>) => <main>{children}</main>;

export default Layout;
