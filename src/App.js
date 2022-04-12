import React from "react";
import { useContext,createContext, useState } from "react";
import traductions from "./assets/data";
import Contenu from "./Components/Contenu";
import Drapeaux from "./Components/Drapeaux";

const appContext = createContext();

function App() {
  const [lang, setLang] = useState("fr");

  const handleLang = (lang) => {
    setLang(lang);
  };
  console.log(lang);

  return (
    <appContext.Provider value={traductions}>
      <Drapeaux handleLang = {handleLang} />
      <Contenu lang = {lang} />
    </appContext.Provider>
  );
}

export {App, appContext};
