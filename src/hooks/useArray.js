import { useState, useCallback } from "react";

const MIN_VALUE = 5;
const MAX_VALUE = 100;

function generateRandomArray(size) {
  return Array.from({ length: size }, () =>
    Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE + 1)) + MIN_VALUE
  );
}

/**
 * Owns the array being visualized, plus the size and speed controls.
 * Sorting logic (comparisons, swaps, step playback) is added in Phase 2 —
 * this hook only handles generating and resetting the raw data.
 */
export function useArray(initialSize = 40) {
  const [size, setSize] = useState(initialSize);
  const [speed, setSpeed] = useState(50); // 1-100, higher = faster
  const [array, setArray] = useState(() => generateRandomArray(initialSize));

  const regenerate = useCallback((newSize = size) => {
    setArray(generateRandomArray(newSize));
  }, [size]);

  const changeSize = useCallback((newSize) => {
    setSize(newSize);
    setArray(generateRandomArray(newSize));
  }, []);

  return { array, size, speed, setSpeed, changeSize, regenerate };
}