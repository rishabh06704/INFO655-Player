// Song.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Song from './Song';

describe('Song Component', () => {
  it('renders correctly with valid props', () => {
    const { getByText } = render(<Song title="Test Song" artist="Test Artist" year={2000} onDoubleClick={() => {}} />);
    expect(getByText('Test Song')).toBeInTheDocument();
    expect(getByText('Artist: Test Artist')).toBeInTheDocument();
    expect(getByText('Year: 2000')).toBeInTheDocument();
  });

  it('handles invalid prop types gracefully', () => {
    const { getByText } = render(<Song title="Test Song" artist="Test Artist" year="Invalid Year" onDoubleClick={() => {}} />);
    expect(getByText('Test Song')).toBeInTheDocument();
    expect(getByText('Artist: Test Artist')).toBeInTheDocument();
    expect(getByText('Year: Invalid Year')).toBeInTheDocument();
  });

  it('triggers onDoubleClick event when double-clicked', () => {
    const handleDoubleClick = jest.fn();
    const { getByTestId } = render(<Song title="Test Song" artist="Test Artist" year={2000} onDoubleClick={handleDoubleClick} />);
    fireEvent.doubleClick(getByTestId('song-entry'));
    expect(handleDoubleClick).toHaveBeenCalledTimes(1);
  });

  it('handles using a string instead of an integer for the year prop', () => {
    const { getByText } = render(<Song title="Test Song" artist="Test Artist" year="2000" onDoubleClick={() => {}} />);
    expect(getByText('Test Song')).toBeInTheDocument();
    expect(getByText('Artist: Test Artist')).toBeInTheDocument();
    expect(getByText('Year: 2000')).toBeInTheDocument();
  });
});