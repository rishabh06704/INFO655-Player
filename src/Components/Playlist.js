//Playlist.js
import React, { useEffect, useState } from 'react';
import ShuffleButton from './ShuffleButton';
import Status from './Status';
import Song from './Song';
import Podcast from './Podcast';
import PlayPauseButton from './PlayPauseButton';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

const Playlist = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/tracks');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPlaylist(data);
        setStatus('Data fetched successfully');
      } catch (error) {
        console.error('Error fetching data:', error);
        setPlaylist([]); // Set an empty playlist in case of an error
        setStatus('Error fetching data');
      }
    };

    fetchData();
  }, []);

  const handleShuffle = async () => {
    try {
      const response = await fetch('http://localhost:3001/tracks');
      if (!response.ok) {
        throw new Error('Failed to fetch shuffled playlist');
      }
      const shuffledPlaylist = await response.json();
      const newShuffledPlaylist = shuffleArray([...shuffledPlaylist]); // Shuffle the playlist array
      setPlaylist(newShuffledPlaylist);
      setCurrentTrackIndex(0);
      setStatus('Shuffled playlist loaded successfully');
    } catch (error) {
      console.error('Error fetching shuffled playlist:', error);
      setStatus('Error fetching shuffled playlist');
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    const currentTrack = playlist[currentTrackIndex];
    const displayedTitle = currentTrack.episodeTitle ? currentTrack.episodeTitle : currentTrack.title;
    setStatus(isPlaying ? `Playing: ${displayedTitle}` : `Paused`);
  };

  const handlePrevTrack = () => {
    const newIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(newIndex);
    const currentTrack = playlist[newIndex];
    const displayedTitle = currentTrack.episodeTitle ? currentTrack.episodeTitle : currentTrack.title;
    setStatus(`Playing: ${displayedTitle}`);
  };

  const handleNextTrack = () => {
    const newIndex = (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(newIndex);
    const currentTrack = playlist[newIndex];
    const displayedTitle = currentTrack.episodeTitle ? currentTrack.episodeTitle : currentTrack.title;
    setStatus(`Playing: ${displayedTitle}`);
  };

  const handleDoubleClick = (title, episodeTitle) => {
    const displayedTitle = episodeTitle ? episodeTitle : title;
    setStatus(`Playing: ${displayedTitle}`);
  };

  return (
    <div>
      <h2>Shuffled Playlist</h2>
      <Status status={status} />
      <div className="button-container">
        <ShuffleButton onClick={handleShuffle} />
        <PlayPauseButton isPlaying={isPlaying} onClick={handlePlayPause} />
        <PrevButton onClick={handlePrevTrack} />
        <NextButton onClick={handleNextTrack} />
      </div>
      <div className="shuffled-playlist">
        {playlist.map((track, index) => (
          <div key={index} className="entry">
            {track.artist ? (
              <Song {...track} onDoubleClick={() => handleDoubleClick(track.title)} />
            ) : (
              <Podcast {...track} onDoubleClick={() => handleDoubleClick(track.title, track.episodeTitle)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;