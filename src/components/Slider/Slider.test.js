import React from 'react';
import { render } from '@testing-library/react';
import Slider from 'components/Slider/Slider';

test('Slider renderes properly', () => {
  const { container } = render(<Slider />);
  const sliderElement = container.getElementsByClassName('Slider')[0];

  expect(sliderElement).toBeInTheDocument();
});
