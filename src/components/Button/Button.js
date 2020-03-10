import 'components/Button/styles/index.scss';

import React from 'react';
import classNames from 'classnames'

function Button({ className, href, role, tabIndex, children, ...props }) {
  return (
    <a
      className={classNames('Button', className)}
      href={href}
      role={role ? role : (href ? 'link' : 'button')}
      tabIndex={tabIndex || 0}
      {...props}
    >
      {children}
    </a>
  );
}

export default Button;
