"use client"

import React from 'react';
import useCursorPosition from './useCursorPosition';

const CursorTracker = () => {
	const cursorPosition = useCursorPosition();

	return (
		<div style={styles.log}>
			Cursor Position: X={cursorPosition.x}, Y={cursorPosition.y}
		</div>
	);
};

const styles = {
	log: {
		position: 'fixed',
		top: '10px',
		right: '10px',
		background: '#f0f0f0',
		border: '1px solid #ccc',
		padding: '10px',
	},
};

export default CursorTracker;
