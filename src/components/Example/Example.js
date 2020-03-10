import 'components/Example/styles/index.scss';

import React, { useState } from 'react';
import Button from 'components/Button/Button';
import ProgressBar from 'components/ProgressBar/ProgressBar';

function Example() {
  const [progress, setProgress] = useState(0);

  // TODO: Percentage caption inside bar.
  // TODO: Process indication inside bar;
  return (
    <div className="Example">
      <ProgressBar progress={progress} progressIsRunning={progress < 100} />
      <br />
      <Button
        className="Button--secondary"
        onClick={() => { setProgress(progress - 10); }}
      >
        Prev step
      </Button>
      <br />
      <Button
        className="Button--secondary"
        onClick={() => { setProgress(progress + 10); }}
      >
        Next step
      </Button>
    </div>
  );
}

export default Example;
