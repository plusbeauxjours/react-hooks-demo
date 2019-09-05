import { useState } from "react";

const useInput = (initialValue: any, validator: any) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: any) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { props: { value, onChange }, utils: { setValue } };
};

export default useInput;
