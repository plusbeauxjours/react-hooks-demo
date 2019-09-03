export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const initialState = {
  count: 0
};

export const reducer = (
  state: any,
  action: {
    type: string;
  }
) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};
