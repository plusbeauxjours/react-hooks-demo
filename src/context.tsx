import React, { useState } from "react";

export const UserContext = React.createContext<any>(null);

interface IUser {
  user: any;
  logUserIn: any;
}
interface IProps {
  children: any;
}

const UserContextProvider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = useState({
    name: "Minjae",
    loggedIn: false
  });
  const logUserIn = () => setUser({ ...user, loggedIn: true });
  return (
    <UserContext.Provider value={{ user, logUserIn }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
