import 'components/ProgressBar/styles/index.scss';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'

function ProgressBar({ className, progress = 0, progressIsRunning = false, currentProgressLabel, totalProgressLabel, ...props }) {
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
        <div className="ProgressBar__ProgressPercentageLabel">
          {progressPercentage}
        </div>

        {currentProgressLabel &&
          <div className="ProgressBar__PointingLabel ProgressBar__PointingLabel--top ProgressBar__CurrentProgressLabel">
            <div className="ProgressBar__PointingLabelText">
              {currentProgressLabel}
            </div>
          </div>
        }
      </div>

      {totalProgressLabel &&
        <div className="ProgressBar__PointingLabel ProgressBar__PointingLabel--bottom ProgressBar__TotalProgressLabel">
          <div className="ProgressBar__PointingLabelText">
            {totalProgressLabel}
          </div>
        </div>
      }
    </div>
  );
}

ProgressBar.propTypes = {
  className: PropTypes.string,
  progress: PropTypes.number,
  progressIsRunning: PropTypes.bool,
  currentProgressLabel: PropTypes.string,
  totalProgressLabel: PropTypes.string
};

export default ProgressBar;
