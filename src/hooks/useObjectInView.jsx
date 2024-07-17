import { useEffect, useState } from "react";

export default function useObjectInView(ref) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}
