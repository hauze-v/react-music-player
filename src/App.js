//Import useState
import { useState } from "react";

// Import styles
import "./styles/app.scss";

// Adding components
import Song from "./components/Song";
import Player from "./components/Player";

// Import Util
import data from "./util";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} />
    </div>
  );
}

export default App;
