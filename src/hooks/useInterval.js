import { useRef, useEffect } from 'react';

function useInterval({ onSetInterval, onInterval, onClearInterval, delay, isRunning = true }) {
  const savedOnSetInterval = useRef();
  const savedOnInterval = useRef();
  const savedOnClearInterval = useRef();

  useEffect(() => {
    savedOnSetInterval.current = onSetInterval;
  }, [onSetInterval]);

  useEffect(() => {
    savedOnInterval.current = onInterval;
  }, [onInterval]);

  useEffect(() => {
    savedOnClearInterval.current = onClearInterval;
  }, [onClearInterval]);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    savedOnSetInterval.current && savedOnSetInterval.current();

    const intervalId = setInterval(() => {
      savedOnInterval.current && savedOnInterval.current();
    }, delay);

    return () =>  {
      clearInterval(intervalId);
      savedOnClearInterval.current && savedOnClearInterval.current();
    };
  }, [delay, isRunning]);
}

export default useInterval;
