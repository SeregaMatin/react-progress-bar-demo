import 'svgxuse/svgxuse.js';
import 'components/SvgIcon/styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

function SvgIcon({ className, src, children, ...props }) {
  return (
    <div
      className={classNames('SvgIcon', className)}
      {...props}
    >
      <svg className="SvgIcon__Icon">
        <use xlinkHref={src}>
        </use>
      </svg>
      {children && children.length > 0 &&
        <div className="SvgIcon__Badge">
          {children}
        </div>
      }
    </div>
  );
}

SvgIcon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string
};

export default SvgIcon;
