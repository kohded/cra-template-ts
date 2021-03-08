import React, { FC } from 'react';
import { APP_NAME } from '../../common/constants';

export const Footer: FC = () => <p>Copyright &#xA9; {`${new Date().getFullYear()} ${APP_NAME}`}</p>;
