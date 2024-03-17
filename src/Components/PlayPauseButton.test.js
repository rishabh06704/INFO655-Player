// PlayPauseButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PlayPauseButton from './PlayPauseButton';

describe('PlayPauseButton Component', () => {
  it('renders correctly with the expected text when not playing', () => {
    const { getByText } = render(<PlayPauseButton isPlaying={false} onClick={() => {}} />);
    expect(getByText('Play')).toBeInTheDocument();
  });

  it('renders correctly with the expected text when playing', () => {
    const { getByText } = render(<PlayPauseButton isPlaying={true} onClick={() => {}} />);
    expect(getByText('Pause')).toBeInTheDocument();
  });

  it('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<PlayPauseButton isPlaying={false} onClick={handleClick} />);
    fireEvent.click(getByText('Play'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});