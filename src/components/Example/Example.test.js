import React from 'react';
import { render } from '@testing-library/react';
import Example from 'components/Example/Example';

test('Example renderes properly', () => {
  const { container } = render(<Example />);
  const exampleElement = container.getElementsByClassName('Example')[0];

  expect(exampleElement).toBeInTheDocument();
});
