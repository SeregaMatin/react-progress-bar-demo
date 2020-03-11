import 'components/RangeSlider/styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Slider from '@material-ui/core/Slider';

function RangeSlider(props) {
  return (
    <Slider
      classes={{
        root: 'RangeSlider',
        rail: 'RangeSlider__Rail',
        track: 'RangeSlider__Track',
        thumb: 'RangeSlider__Thumb',
        valueLabel: 'RangeSlider__ValueLabel'
      }}
      valueLabelDisplay="on"
      {...props}
    />
  );
};

RangeSlider.propTypes = {
  className: PropTypes.string
};

export default RangeSlider;
