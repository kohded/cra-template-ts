import React, { FC, PropsWithChildren, ReactNode, Suspense } from 'react';
import { Container } from '../Container/Container';
import { Loading } from '../Loading/Loading';
import classes from './LayoutContainer.module.scss';

interface LayoutContainerProps {
  children: ReactNode;
  isFluid?: boolean;
  isPadding?: boolean;
  role?: string;
  Tag: keyof JSX.IntrinsicElements;
}

export const LayoutContainer: FC<LayoutContainerProps> = ({
  children,
  isFluid,
  isPadding,
  role,
  Tag = 'div',
}: PropsWithChildren<LayoutContainerProps>) => (
  <Tag className={classes.root} role={role}>
    <Container isFluid={isFluid} isPadding={isPadding}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Container>
  </Tag>
);
