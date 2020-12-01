import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };

  // Return your JSX
  return (
    <div onClick={songSelectHandler} className="library-song">
      <img src={song.cover} alt={`Cover art for ${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
