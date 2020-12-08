import React from "react";
import aftergold from "../images/aftergold_big_wild.jpg";

const Song = ({ currentSong }) => {
  // Return your JSX
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt={`Cover art for ${currentSong.name}`} />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
