import { useState } from "react";

export const useCount = (initial, max) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return { count, increment, decrement };
};
