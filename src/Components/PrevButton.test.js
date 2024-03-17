// PrevButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PrevButton from './PrevButton';

describe('PrevButton Component', () => {
  it('renders correctly with the expected text', () => {
    const { getByText } = render(<PrevButton onClick={() => {}} />);
    expect(getByText('Prev')).toBeInTheDocument();
  });

  it('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<PrevButton onClick={handleClick} />);
    fireEvent.click(getByText('Prev'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});