import uuid from "uuid/v4";

export const ADD = "add";
export const EDIT = "edit";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const UNCOMPLETE = "uncomplete";

export const initialState = {
  toDos: [],
  completed: []
};

export const reducer = (
  state: any,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
      };
    case EDIT:
      const editTarget = state.toDos.find(
        (toDo: any) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: [...state.toDos, { text: action.payload, id: uuid() }]
      };
    case DELETE:
      return {
        ...state,
        toDos: state.toDos.filter((toDo: any) => toDo.id !== action.payload),
        completed: state.completed.filter(
          (toDo: any) => toDo.id !== action.payload
        )
      };
    case COMPLETE:
      const target = state.toDos.find(
        (toDo: any) => toDo.id === action.payload
      );
      return {
        ...state,
        toDos: state.toDos.filter((toDo: any) => toDo.id !== action.payload),
        completed: [...state.completed, { ...target }]
      };
    case UNCOMPLETE:
      const aTarget = state.completed.find(
        (toDo: any) => toDo.id === action.payload
      );
      return {
        ...state,
        completed: state.completed.filter(
          (toDo: any) => toDo.id !== action.payload
        ),
        toDos: [...state.toDos, { ...aTarget }]
      };
    default:
      return;
  }
};
