import React from 'react';
import { render } from '@testing-library/react';
import App from 'components/App/App';

test('App renderes properly', () => {
  const { container } = render(<App />);
  const appElement = container.getElementsByClassName('App')[0];

  expect(appElement).toBeInTheDocument();
});
