import 'components/Example/styles/index.scss';

import React, { useState } from 'react';
import useInterval from 'hooks/useInterval';

import Button from 'components/Button/Button';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import RangeSlider from 'components/RangeSlider/RangeSlider';

const minDuration = 30;
const maxDuration = 90;
const initialDuration = 60;

function Example() {
  const [timeStamp, setTimeStamp] = useState(performance.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [duration, setDuration] = useState(initialDuration);

  const progress = Math.floor(elapsedTime / duration * 100);
  const progressIsRunning = elapsedTime < duration;

  useInterval({
    onSetInterval: () => {
      setTimeStamp(performance.now());
    },
    onInterval: () => {
      const newTimeStamp = performance.now();
      const elapsedTimeSinceLastInterval = (newTimeStamp - timeStamp) / 1000;

      let newElapsedTime = elapsedTime + elapsedTimeSinceLastInterval;
      if (newElapsedTime > duration) {
        newElapsedTime = duration;
      }

      setTimeStamp(newTimeStamp);
      setElapsedTime(newElapsedTime);
    },
    delay: 100,
    isRunning: progressIsRunning
  });

  return (
    <div className="Example">
      <div className="Example__Row">
        <div className="Example__RowLabel">
          Duration
        </div>
        <RangeSlider
          min={minDuration}
          max={maxDuration}
          value={duration}
          onChange={(e, newValue) => { setDuration(newValue); }}
        />
      </div>
      <div className="Example__Row">
        <div className="Example__RowLabel">
          Progress
        </div>
        <ProgressBar
          progress={progress}
          progressIsRunning={progressIsRunning}
          currentProgressLabel={elapsedTime.toFixed(1)}
          totalProgressLabel={duration.toFixed(1)}
        />
      </div>
      <div className="Example__Row">
        <Button
          className="Button--primary Example__ResetButton"
          onClick={() => {
            setElapsedTime(0);
            setDuration(initialDuration);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default Example;
