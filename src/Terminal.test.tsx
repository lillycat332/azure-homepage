import React from 'react';
import { render, screen } from '@testing-library/react';
import Terminal from './components/Terminal';

test("renders child text", () => {
	render(<Terminal>Hello world</Terminal>)
	const Child = screen.getByText(/Hello\ world/i);
	expect(Child).toBeInTheDocument();
});