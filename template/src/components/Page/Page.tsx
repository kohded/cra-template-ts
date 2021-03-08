import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { APP_NAME } from '../../common/constants';

interface PageProps {
  children: ReactNode;
  htmlTags?: ReactNode;
  metaDescriptionContent: string;
  title: string;
}

export const Page: FC<PageProps> = ({
  children,
  htmlTags,
  metaDescriptionContent,
  title,
}: PropsWithChildren<PageProps>) => (
  <HelmetProvider>
    <Helmet defaultTitle={APP_NAME} titleTemplate={`${APP_NAME} | %s`}>
      <title>{title}</title>
      <meta name="description" content={metaDescriptionContent} />
      {htmlTags}
    </Helmet>
    {children}
  </HelmetProvider>
);
