// NextButton.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NextButton from './NextButton';

describe('NextButton Component', () => {
  it('renders correctly with the expected text', () => {
    const { getByText } = render(<NextButton onClick={() => {}} />);
    expect(getByText('Next')).toBeInTheDocument();
  });

  it('triggers onClick event when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<NextButton onClick={handleClick} />);
    fireEvent.click(getByText('Next'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});