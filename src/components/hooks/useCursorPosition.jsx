// hooks/useCursorPosition.js
"use client"
import { useState, useEffect, useCallback } from 'react';


import throttle from '@/utils/throttle';

const useCursorPosition = (throttleTime = 100) => {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = useCallback(throttle((event) => {
		setCursorPosition({ x: event.clientX, y: event.clientY });
	}, throttleTime), [throttleTime]);

	useEffect(() => {
		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	}, [handleMouseMove]);

	return cursorPosition;
};

export default useCursorPosition;
