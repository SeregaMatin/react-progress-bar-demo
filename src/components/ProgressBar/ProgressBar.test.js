import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from 'components/ProgressBar/ProgressBar';

test('ProgressBar renderes properly', () => {
  const { container } = render(<ProgressBar />);
  const progressBarElement = container.getElementsByClassName('ProgressBar')[0];

  expect(progressBarElement).toBeInTheDocument();
});
