import React from 'react';
import Box from './Box.tsx';
import './buttons.css';
import { mirage } from 'ayu';

const windowStyle = {
	backgroundColor: mirage.editor.bg.hex(),
	borderRadius: 8,
	color: mirage.ui.fg.hex(),
	minHeight: 400,
	padding: 12,
	minWidth: 700,
	marginTop: "5%",
	boxShadow: `
  0 1px 1px rgba(0,0,0,0.11), 
	0 2px 2px rgba(0,0,0,0.11), 
	0 4px 4px rgba(0,0,0,0.11), 
	0 8px 8px rgba(0,0,0,0.11), 
	0 16px 16px rgba(0,0,0,0.11), 
	0 32px 32px rgba(0,0,0,0.11)`,
}

const Terminal = ({ children }) => {
	return (
		<div className="code">
			<Box style={windowStyle}>
				<div className='base-circle close-circle'></div>
				<div className='base-circle min-circle'></div>
				<div className='base-circle max-circle'></div>
				<br />
				<br />
				<p className="leftAlign">{children}</p>
			</Box>
		</div >
	);
}

export default Terminal;