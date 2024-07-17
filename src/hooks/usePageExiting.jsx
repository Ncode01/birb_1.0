import { useEffect, useState } from "react";

export default function usePageExiting(ref) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setExit((preVal) => {
        const value = ref.current.getBoundingClientRect().y <= 0;
        if (preVal === value) {
          return preVal;
        } else {
          return value;
        }
      });
    });
  }, [ref]);

  return exit;
}
