import React from 'react';

type BoxProps = {
	children: React.ReactNode
	style?: React.CSSProperties
}

const Box: React.FunctionComponent<BoxProps> = ({ children, style, ...props }) => {
	return (
		<div style={style} {...props}> {children}</div >
	);
}

export default Box;