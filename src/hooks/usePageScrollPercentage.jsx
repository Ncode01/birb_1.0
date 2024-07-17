import { useEffect, useState } from "react";

export default function usePageScrollPercentage(ref, maxValue = 100) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const rect = ref.current.getBoundingClientRect();
      const difference = -1 * rect.y;
      const offset =
        difference > 0
          ? difference < rect.height
            ? difference
            : rect.height
          : 0;
      const percentage = (offset / rect.height) * 100;
      const value = maxValue !== 100 ? percentage > maxValue : percentage;
      setPercentage((preVal) => {
        if (preVal === value) {
          return preVal;
        } else {
          return value;
        }
      });
    });
  }, [ref, maxValue]);

  return percentage;
}
