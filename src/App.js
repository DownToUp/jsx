import React from "react";
import "./App.css";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";

const App = () => {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red"> Dahmani Abderaouf </h1>

        <br />

        <img src={imageInSrc} alt="SRC" />

        <br />

        <img src="/imageInPublic.jpg" alt="Public" />
      </div>

      <video>
        <contrôles de la largeur de la vidéo="320" height="240" />

        <source src="./myVideo.mp4" type="video / mp4" />
      </video>
    </div>
  );
};

export default App;
