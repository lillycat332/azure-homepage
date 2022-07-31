import React from 'react';
import { render, screen } from '@testing-library/react';
import Box from './components/Box';

test('renders text', () => {
	render(<Box>
		Hello
	</Box>);
	const linkElement = screen.getByText(/Hello/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders passed in components', () => {
	render(<Box>
		<p>Hello</p>
	</Box>);
	const linkElement = screen.getByText(/Hello/i);
	expect(linkElement).toBeInTheDocument();
});

test('renders nested', () => {
	render(<Box>
		<Box>
			<Box>
				<p>nested</p>
			</Box>
		</Box>
	</Box>);
	const linkElement = screen.getByText(/nested/i);
	expect(linkElement).toBeInTheDocument();
});