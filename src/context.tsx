import React, { useState, useContext } from "react";

const UserContext = React.createContext<any>(null);

interface IProps {
  children: any;
}

const UserContextProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState({
    name: "Minjae",
    loggedIn: false
  });
  const logUserIn = () => {
    console.log("user");
    setUser({ ...user, loggedIn: true });
  };
  return (
    <UserContext.Provider value={{ user, fn: { logUserIn } }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(UserContext);
  return user;
};
export const useFns = () => {
  const { fn } = useContext(UserContext);
  return fn;
};

export default UserContextProvider;
