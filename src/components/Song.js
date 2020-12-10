import React from "react";

const Song = ({ currentSong, isPlaying }) => {
  // Styles
  const paused = {
    animationPlayState: `paused`,
  };
  const play = {
    animationPlayState: `running`,
  };

  // Return your JSX
  return (
    <div className="song-container">
      <img
        style={isPlaying ? play : paused}
        className={"spin"}
        src={currentSong.cover}
        alt={`Cover art for ${currentSong.name}`}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
