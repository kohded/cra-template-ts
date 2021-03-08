import React, { FC, PropsWithChildren, ReactNode } from 'react';
import classes from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  isFluid?: boolean;
  isPadding?: boolean;
}

export const Container: FC<ContainerProps> = ({
  children,
  isFluid,
  isPadding = true,
}: PropsWithChildren<ContainerProps>) => (
  <div
    className={
      isFluid && !isPadding
        ? undefined
        : !isFluid && isPadding
        ? `${classes.root} ${classes.padding}`
        : !isFluid
        ? classes.root
        : isPadding
        ? classes.padding
        : undefined
    }
  >
    {children}
  </div>
);
