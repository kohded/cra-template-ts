import React, { FC, PropsWithChildren, ReactNode } from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import classes from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  isFullWidth?: boolean;
  role: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  isFullWidth,
  role,
}: PropsWithChildren<ContainerProps>) => (
  <div
    className={`${isFullWidth ? classes[`container-full-width`] : classes.container}`}
    role={role}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);
