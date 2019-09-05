import { useState, useEffect } from "react";

interface SelectProtected {
  readonly wrapperElement: HTMLDivElement;
  readonly inputElement: HTMLInputElement;
}

const useTitle = (initialState: string) => {
  const [title, setTitle] = useState(initialState);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (htmlTitle) {
      htmlTitle.innerText = title;
    }
    setTimeout(() => {
      setTitle("Home");
    }, 1000);
  };
  useEffect(updateTitle, [title]);
  return { setTitle, updateTitle };
};

export default useTitle;
