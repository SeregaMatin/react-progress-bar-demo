import 'components/Example/styles/index.scss';

import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import icomoon from 'assets/icons/icomoon.svg';

function Example() {
  return (
    <div className="Example">
      <SvgIcon src={`${icomoon}#icon-react`} className="SvgIcon--size_xxl" />
    </div>
  );
}

export default Example;
