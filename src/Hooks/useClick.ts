import { useRef, useEffect } from "react";

export const useClick = (onClick: any) => {
  const element = useRef<any>();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

export default useClick;
