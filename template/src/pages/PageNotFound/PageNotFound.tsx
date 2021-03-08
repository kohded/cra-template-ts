import React, { FC } from 'react';
import { Page } from '../../components/Page/Page';

export const PageNotFound: FC = () => {
  const pageNotFoundText = '404 - Page Not Found';

  return (
    <Page metaDescriptionContent={pageNotFoundText} title={pageNotFoundText}>
      <p>{pageNotFoundText}</p>
    </Page>
  );
};
