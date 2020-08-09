import React, { PropsWithChildren } from 'react';
import classes from './Container.module.scss';

interface Props {
  children: React.ReactNode;
}

export const Container: React.FC<Props> = ({ children }: PropsWithChildren<Props>) => (
  <div className={classes.container}>{children}</div>
);
