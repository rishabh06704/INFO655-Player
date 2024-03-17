// Podcast.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast Component', () => {
  it('renders correctly with valid props', () => {
    const { getByText } = render(<Podcast season={1} episode={1} episodeTitle="Test Episode" onDoubleClick={() => {}} />);
    expect(getByText('Podcast Episode')).toBeInTheDocument();
    expect(getByText('Season 1 Episode 1')).toBeInTheDocument();
    expect(getByText('Title: Test Episode')).toBeInTheDocument();
  });

  it('handles invalid prop types gracefully', () => {
    const { getByText } = render(<Podcast season="Invalid Season" episode="Invalid Episode" episodeTitle="Test Episode" onDoubleClick={() => {}} />);
    expect(getByText('Podcast Episode')).toBeInTheDocument();
    expect(getByText('Season Invalid Season Episode Invalid Episode')).toBeInTheDocument();
    expect(getByText('Title: Test Episode')).toBeInTheDocument();
  });

  it('displays the correct information when season prop is undefined', () => {
    const { getByText } = render(<Podcast episode={1} episodeTitle="Test Episode" onDoubleClick={() => {}} />);
    expect(getByText('Podcast Episode')).toBeInTheDocument();
    expect(getByText('Episode 1')).toBeInTheDocument();
    expect(getByText('Title: Test Episode')).toBeInTheDocument();
  });

  it('triggers onDoubleClick event when double-clicked', () => {
    const handleDoubleClick = jest.fn();
    const { getByTestId } = render(<Podcast season={1} episode={1} episodeTitle="Test Episode" onDoubleClick={handleDoubleClick} />);
    fireEvent.doubleClick(getByTestId('podcast-entry'));
    expect(handleDoubleClick).toHaveBeenCalledTimes(1);
  });

  it('returns the correct output when the season prop is undefined', () => {
    const { getByText } = render(<Podcast episode={1} episodeTitle="Test Episode" onDoubleClick={() => {}} />);
    expect(getByText('Podcast Episode')).toBeInTheDocument();
    expect(getByText('Episode 1')).toBeInTheDocument();
    expect(getByText('Title: Test Episode')).toBeInTheDocument();
  });
});