import { useState, useEffect } from "react";

const useVisibleCount = () => {
  const [visibleCount, setVisibleCount] = useState(getCount());

  function getCount() {
    const width = window.innerWidth;
    if (width >= 1024) return 5;
    if (width >= 768) return 3;
    return 2;
  }

  useEffect(() => {
    const handleResize = () => setVisibleCount(getCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return visibleCount;
};

export default useVisibleCount;
