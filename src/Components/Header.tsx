import React, { useContext } from "react";
import { UserContext } from "../context";

const Header: React.FC = () => {
  const {
    user: { name, loggedIn }
  } = useContext(UserContext);
  return (
    <header>
      <a href="#">Home</a>Hello, Minjae, you are
      {loggedIn ? "logged in " : "anonymous"}
    </header>
  );
};

export default Header;
