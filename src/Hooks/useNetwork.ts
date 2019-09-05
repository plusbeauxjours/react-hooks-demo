import { useEffect, useState } from "react";

const useNetwork = () => {
  const [isOnline, setOnline] = useState(navigator.onLine);
  const toggleOnline = () => {
    if (navigator.onLine) {
      setOnline(true);
    } else {
      setOnline(false);
    }
  };
  useEffect(() => {
    window.addEventListener("online", toggleOnline);
    window.addEventListener("offline", toggleOnline);
    return () => {
      window.removeEventListener("online", toggleOnline);
      window.removeEventListener("offline", toggleOnline);
    };
  }, [isOnline]);
  return { isOnline };
};

export default useNetwork;
