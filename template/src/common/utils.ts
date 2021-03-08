import { FC, lazy, LazyExoticComponent } from 'react';

interface ActionEvent {
  payload: unknown;
  type: string;
}

const actionEvent = (type: string, payload?: unknown): ActionEvent => ({
  payload,
  type,
});

const lazyComponent = (
  name: string,
  importer: Promise<Record<string, FC>>
): LazyExoticComponent<FC> =>
  lazy(async () => {
    const component = await importer;
    return { default: component[name] };
  });

export { actionEvent, lazyComponent };
