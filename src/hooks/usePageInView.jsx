import { useEffect, useState } from "react";

export default function usePageInView(ref) {
  const [view, setView] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const value =
        window.innerHeight - ref.current.getBoundingClientRect().y >= 0;

      setView((preVal) => {
        if (preVal === value) {
          return preVal;
        } else {
          return value;
        }
      });
    });
  }, [ref]);

  return view;
}
