import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {/* Map over the songs array and create a LibrarySong component for each */}
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
