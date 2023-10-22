import { useState } from "react";

export const useCount = (initial = 0, min = 0, max = 5) => {
  const [count, setCount] = useState(initial);

  if (initial < min || initial > max) {
    initial = min;
  }

  const increment = () => {
    if (count < max) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > min) {
      setCount((prev) => prev - 1);
    }
  };

  return { count, increment, decrement };
};
