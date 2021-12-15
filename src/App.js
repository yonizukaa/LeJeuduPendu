import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { CallApi, GOOD_LETTER } from "./Components/CallApi";
import { ThemeContext } from "./contexts/theme";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <h1 className="title">Jeu du pendu</h1>
      <div className="text">Mode{isDark ? "Dark" : "Light"} </div>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
      <CallApi></CallApi>
      <p className="header-description">Trouvez le mot!</p>
      <div className="mot">
        <p></p>
      </div>
      <div className="clavier"> abcdefghijklmnopqrstwxyz</div>
    </div>
  );
}

export default App;
