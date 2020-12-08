import React from "react";
import { playAudio } from "../util";

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  audioRef,
  isPlaying,
  currentSong,
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
    playAudio(isPlaying, audioRef);
  };

  // Return your JSX
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.id === currentSong.id ? "selected" : ""}`}
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
