import React from 'react';
import { render } from '@testing-library/react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

test('SvgIcon renderes properly', () => {
  const { container } = render(<SvgIcon />);
  const svgIconElement = container.getElementsByClassName('SvgIcon')[0];

  expect(svgIconElement).toBeInTheDocument();
});
