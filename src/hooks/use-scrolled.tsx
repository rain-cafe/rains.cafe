import { useEffect, useState } from "react";

export function useScrolled() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', listener, { passive: true });

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return scrolled;
}
