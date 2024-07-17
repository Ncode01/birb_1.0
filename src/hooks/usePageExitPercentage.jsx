import { useEffect, useState } from "react";

export default function usePageExitPercentage(ref) {
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
      const value = (offset / rect.height) * 100;
      setPercentage((preVal) => {
        if (preVal === value) {
          return preVal;
        } else {
          return value;
        }
      });
    });
  }, [ref]);

  return percentage;
}
