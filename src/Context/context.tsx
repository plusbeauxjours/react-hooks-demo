import React, { useState, useContext, createContext } from "react";
import { useReducer } from "react";
import { reducer, initialState } from "../Reducer/toDosReducer";

const UserContext = createContext<any>(null);
const LangContext = createContext<any>(null);
const ToDosContext = createContext<any>(null);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface IUser {
  children: any;
}
interface ILang {
  defaultLang: string;
  children: any;
  translations: any;
}
interface IToDos {
  children: any;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const UserContextProvider: React.FC<IUser> = ({ children }) => {
  const [user, setUser] = useState({
    name: "Minjae",
    loggedIn: false
  });
  const logUserIn = () => {
    setUser({ ...user, loggedIn: true });
  };
  return (
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const LangContextProvider: React.FC<ILang> = ({
  defaultLang,
  children,
  translations
}) => {
  const [lang, setLang] = useState(defaultLang);
  const hyperTranslate = (text: string) => {
    if (lang === defaultLang) {
      return text;
    } else {
      return translations[lang][text];
    }
  };
  return (
    <LangContext.Provider value={{ setLang, t: hyperTranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const ToDosContextProvider: React.FC<IToDos> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ToDosContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDosContext.Provider>
  );
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};
export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};
export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};
export const useT = () => {
  const { t } = useContext(LangContext);
  return t;
};
export const useDispatch = () => {
  const { dispatch } = useContext(ToDosContext);
  return dispatch;
};
export const useToDos = () => {
  const {
    state: { toDos }
  } = useContext(ToDosContext);
  return toDos;
};
export const useCompleted = () => {
  const {
    state: { completed }
  } = useContext(ToDosContext);
  return completed;
};
