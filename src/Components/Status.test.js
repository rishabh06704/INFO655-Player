// Status.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Status from './Status';

describe('Status Component', () => {
  it('renders correctly with the provided status prop', () => {
    const { getByText } = render(<Status status="Test Status" />);
    expect(getByText('Status: Test Status')).toBeInTheDocument();
  });
});