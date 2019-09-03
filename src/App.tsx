import React from "react";
import GlobalStyles from "./global-styles";
import { UserContextProvider } from "./Hooks/context";
import { LangContextProvider } from "./Hooks/context";
import translations from "./Hooks/translations";
import AppRouter from "./Components/Router";

const App: React.FC = () => (
  <LangContextProvider defaultLang={"en"} translations={translations}>
    <UserContextProvider>
      <GlobalStyles />
      <AppRouter />
    </UserContextProvider>
  </LangContextProvider>
);

export default App;
