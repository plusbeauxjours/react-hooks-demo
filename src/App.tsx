import React from "react";
import GlobalStyles from "./global-styles";
import { UserContextProvider, ToDosContextProvider } from "./Context/context";
import { LangContextProvider } from "./Context/context";
import translations from "./translations";
import AppRouter from "./Components/Router";

const App: React.FC = () => (
  <ToDosContextProvider>
    <LangContextProvider defaultLang={"en"} translations={translations}>
      <UserContextProvider>
        <GlobalStyles />
        <AppRouter />
      </UserContextProvider>
    </LangContextProvider>
  </ToDosContextProvider>
);

export default App;
