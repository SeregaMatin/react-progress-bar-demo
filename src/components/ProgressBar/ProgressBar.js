import 'components/ProgressBar/styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

function ProgressBar({ className, progress = 0, progressIsRunning = false, ...props }) {
  const progressPercentage = `${progress < 0 ? 0 : (progress > 100 ? 100 : progress)}%`;

  return (
    <div
      className={classNames('ProgressBar', className)}
      {...props}
    >
      <div
        className={classNames('ProgressBar__ProgressIndicator', { 'ProgressBar__ProgressIndicator--running': progressIsRunning })}
        style={{ width: progressPercentage }}
      >
        <div className="ProgressBar__ProgressIndicatorCaption">
          {progressPercentage}
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number,
  progressIsRunning: PropTypes.bool
};

export default ProgressBar;
