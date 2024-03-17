// ShuffleButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShuffleButton from './ShuffleButton';

describe('ShuffleButton Component', () => {
  it('renders correctly with the expected text', () => {
    const { getByText } = render(<ShuffleButton onClick={() => {}} />);
    expect(getByText('Shuffle')).toBeInTheDocument();
  });

  it('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ShuffleButton onClick={handleClick} />);
    fireEvent.click(getByText('Shuffle'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});