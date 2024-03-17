// Song.js
import React from 'react';

const Song = ({ title, artist, year, onDoubleClick }) => {
  return (
    <div
      className="entry" 
      data-testid="song-entry" // Add a test ID
      onDoubleClick={onDoubleClick}
      style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
    >
      <h3>{title}</h3>
      <p style={{ fontWeight: 'bold' }}>Artist: {artist}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Song;