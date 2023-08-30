import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [icon, setIcon] = useState("🧚");
  const icons = ["Lucky🤑", "Nomal😑", "Bad🥶"];

  const onClickButton = () => {
    setIcon(icons[Math.floor(Math.random() * icons.length)]);
  };

  return (
    <div className="container">
      <div className="container_inner">
        <h1>The ForTune</h1>
        <p>{icon}</p>
      </div>
      <div className="btn">
        <button onClick={onClickButton}>change</button>
      </div>
    </div>
  );
}

export default App;
