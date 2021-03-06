import React from 'react';
import { render, wait } from '@testing-library/react';
import useDocumentTitle from '../useDocumentTitle';

describe('useDocumentTitle', () => {
  const Title = () => {
    useDocumentTitle('Hello World');

    return <span>Hello World</span>;
  };

  it('Should The Hook Works With Default Behaviour', async () => {
    const DefaultTitle = () => {
      useDocumentTitle();

      return <span>Hello World</span>;
    };

    render(<DefaultTitle />);

    await wait(() => {
      expect(document.title).toEqual('');
    });
  });

  it('Should The Hook Works Well', async () => {
    render(<Title />);

    await wait(() => {
      expect(document.title).toEqual('Hello World');
    });
  });
});
