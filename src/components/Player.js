import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  setCurrentSong,
  currentSong,
  songs,
}) => {
  // Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Functions
  const dragHandler = (event) => {
    audioRef.current.currentTime = event.target.value;
    setSongInfo({ ...songInfo, currentTime: event.target.value });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const skipTrackHandler = async (direction) => {
    if (typeof direction !== "number") return;

    let index = songs.indexOf(currentSong) + direction;
    if (index < 0) index = songs.length - 1;
    if (index > songs.length - 1) index = 0;
    await setCurrentSong(songs[index]);

    if (isPlaying) audioRef.current.play();
  };

  // Get the animation percentage used for animating the slider
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;

  // Add styles
  const style = {
    transform: `translateX(${animationPercentage}%)`,
  };

  // Return your JSX
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div className="animate-track" style={style}></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(-1)}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler(1)}
          className="skip-forward"
          icon={faAngleRight}
          size="2x"
        />
      </div>
    </div>
  );
};

export default Player;
