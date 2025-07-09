// React imports
import { useEffect, useRef } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Cursor = () => {
	const { addPin, currentImage } = useMarkers();
	
	const customCursorRef = useRef<any>(null);

	useEffect(() => {
		const moveX = 30;
		const moveY = 30
		
		const setInitialPosition = (e: MouseEvent) => {
			if (customCursorRef.current) {
				customCursorRef.current.style.left = `${e.pageX - moveX}px`;
				customCursorRef.current.style.top = `${e.pageY - moveY}px`;
			}
		};

		const moveCursor = (e: MouseEvent) => {
			if (customCursorRef.current) {
				const offsetX = moveX;
				const offsetY = moveY;

				customCursorRef.current.style.left = `${e.pageX - offsetX}px`;
				customCursorRef.current.style.top = `${e.pageY - offsetY}px`;
			}
		};

		if (addPin) {
			window.addEventListener('click', setInitialPosition, { once: true });
			window.addEventListener('mousemove', moveCursor);
		}

		return () => {
			window.removeEventListener('mousemove', moveCursor);
			window.removeEventListener('click', setInitialPosition);
		};
	}, [ addPin ]);


	if (!addPin) return <></>;

	return (
		<img 
			ref={customCursorRef} 
			className="custom-cursor"
			src={currentImage} 
			alt="add-pin" 
		/>
	)
}

Cursor.displayName="Cursor";