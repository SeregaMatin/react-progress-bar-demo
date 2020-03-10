import React from 'react';
import { render } from '@testing-library/react';
import Button from 'components/Button/Button';

test('Button renderes properly', () => {
  const { container } = render(<Button />);
  const buttonElement = container.getElementsByClassName('Button')[0];

  expect(buttonElement).toBeInTheDocument();
});
