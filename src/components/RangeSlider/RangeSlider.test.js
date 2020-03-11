import React from 'react';
import { render } from '@testing-library/react';
import RangeSlider from 'components/RangeSlider/RangeSlider';

test('Slider renderes properly', () => {
  const { container } = render(<RangeSlider value={0} />);
  const rangeSliderElement = container.getElementsByClassName('RangeSlider')[0];

  expect(rangeSliderElement).toBeInTheDocument();
});
