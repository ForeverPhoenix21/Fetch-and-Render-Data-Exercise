import React, { useState } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
      });
  };
  return (
    <div>
      Chuck Norris jokes
      <br />
      <button onClick={getJoke}>Get Joke Right Now</button>
      <br />
      {joke}
    </div>
  );
}

export default App;
