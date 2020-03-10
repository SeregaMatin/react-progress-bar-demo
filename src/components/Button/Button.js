import 'components/Button/styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

function Button({ className, href, role, tabIndex = '0', children, ...props }) {
  return (
    <a
      className={classNames('Button', className)}
      href={href}
      role={role ? role : (href ? 'link' : 'button')}
      tabIndex={tabIndex}
      {...props}
    >
      {children}
    </a>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  role: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
