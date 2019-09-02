import React from "react";
import GlobalStyles from "./global-styles";
import Screen from "./Components/Screen";
import UserContextProvider from "./context";

const App: React.FC = () => (
  <UserContextProvider>
    <GlobalStyles />
    <Screen />
  </UserContextProvider>
);

export default App;
