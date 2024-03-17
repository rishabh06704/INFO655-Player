// Podcast.js
import React from 'react';

const Podcast = ({ season, episode, episodeTitle, onDoubleClick }) => {
  return (
    <div
      className="entry" 
      data-testid="podcast-entry" // Add a test ID
      onDoubleClick={onDoubleClick}
      style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
    >
      <h3>Podcast Episode</h3>
      {season !== undefined ? (
        <p>Season {season} Episode {episode}</p>
      ) : (
        <p>Episode {episode}</p>
      )}
      <p style={{ fontStyle: 'italic' }}>Title: {episodeTitle}</p>
    </div>
  );
};

export default Podcast;