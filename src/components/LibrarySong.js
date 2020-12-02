import React from "react";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);

    /* Map over the array of songs and when the id's match (currentlySelected) change active to true and the others to false
       Then update the state of "songs" to the new array */
    const newSongs = songs.map((songTemp) => {
      if (songTemp.id === song.id) {
        return {
          ...songTemp,
          active: true,
        };
      } else {
        return {
          ...songTemp,
          active: false,
        };
      }
    });

    setSongs(newSongs);

    /* Setup a promise here that continues to check if the audio is loaded. If we try to play immediately, it won't work */
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  // Return your JSX
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt={`Cover art for ${song.name}`} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;