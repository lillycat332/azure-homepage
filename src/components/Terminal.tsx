import React from 'react';
import Box from './Box.tsx';
import './buttons.css';

const windowStyle = {
	backgroundColor: '#333',
	borderRadius: 8,
	color: '#eee',
	minHeight: 400,
	padding: 12,
	width: 600,
	marginTop: "5%",
	boxShadow: `
  0px 0px 1.3px rgba(0, 0, 0, 0.02),
  0px 0px 2.9px rgba(0, 0, 0, 0.029),
  0px 0px 4.8px rgba(0, 0, 0, 0.036),
  0px 0px 7.3px rgba(0, 0, 0, 0.042),
  0px 0px 10.7px rgba(0, 0, 0, 0.048),
  0px 0px 15.7px rgba(0, 0, 0, 0.054),
  0px 0px 23.8px rgba(0, 0, 0, 0.061),
  0px 0px 38.8px rgba(0, 0, 0, 0.07),
  0px 0px 80px rgba(0, 0, 0, 0.09)`,
}

const Terminal = ({ children }) => {
	return (
		<div className="code">
			<Box style={windowStyle}>
				<div className='base-circle close-circle'></div>
				<div className='base-circle min-circle'></div>
				<div className='base-circle max-circle'></div>
				<h1 className="leftAlign">{children}</h1>
			</Box>
		</div >
	);
}

export default Terminal;