import React from "react";
import GlobalStyles from "./global-styles";
import Screen from "./Components/Screen";
import { UserContextProvider } from "./Hooks/context";
import { LangContextProvider } from "./Hooks/context";
import translations from "./Hooks/translations";

const App: React.FC = () => (
  <LangContextProvider defaultLang={"en"} translations={translations}>
    <UserContextProvider>
      <GlobalStyles />
      <Screen />
    </UserContextProvider>
  </LangContextProvider>
);

export default App;
