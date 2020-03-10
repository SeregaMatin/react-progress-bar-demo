import 'svgxuse/svgxuse.js';
import 'components/SvgIcon/styles/index.scss';

import React from 'react';
import classNames from 'classnames'

function SvgIcon({ src, className, children }) {
  return (
    <div className={classNames('SvgIcon', className)}>
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

export default SvgIcon;
