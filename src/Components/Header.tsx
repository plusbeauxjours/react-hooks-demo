import React from "react";
import { useUser } from "../Hooks/context";

const Header: React.FC = () => {
  const { name, loggedIn } = useUser();
  return (
    <header>
      <a href="/">Home</a> Hello, {name}, you are{" "}
      {loggedIn ? "logged in" : "anonymous"}
    </header>
  );
};

export default Header;
