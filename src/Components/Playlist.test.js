// Playlist.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Playlist from './Playlist';
import data from './audio.json';

describe('Playlist Component', () => {
  beforeEach(() => {
    // Mock the fetch function before each test case
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(data.tracks),
      })
    );
  });

  it('renders the component without errors', async () => {
    const { getByText } = render(<Playlist />);

    // Wait for the playlist to be fetched and rendered
    await waitFor(() => {
      expect(getByText('Shuffled Playlist')).toBeInTheDocument();
    });
  });

  it('displays the correct number of tracks', async () => {
    const { getAllByTestId } = render(<Playlist />);

    // Wait for the playlist to be fetched and rendered
    await waitFor(() => {
      expect(getAllByTestId(/song-entry|podcast-entry/)).toHaveLength(data.tracks.length);
    });
  });
});