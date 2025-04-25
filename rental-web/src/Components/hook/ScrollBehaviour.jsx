// src/hooks/useScrollBehaviour.js
import { useState, useEffect, useRef } from "react";

export default function useScrollBehaviour() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0) {
        setShow(true);
      } else if (currentY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show;
}
