// App imports
import './styles.scss';

// React imports
import { useEffect, useRef } from 'react';

import { useMarkers } from 'context/maps/markers';

export const Cursor = () => {
	const { addPin } = useMarkers();

	const customCursorRef = useRef<any>(null);
	
	useEffect(() => {
	      if (customCursorRef.current) {
	          const { innerWidth, innerHeight } = window;
	          customCursorRef.current.style.left = `${innerWidth / 2 - 30}px`;
	          customCursorRef.current.style.top = `${innerHeight / 2 - 30}px`;
	      }
	  }, []);

	// Handle cursor movement on desktop
	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
		if (customCursorRef.current) {
			customCursorRef.current.style.left = `${e.pageX - 30}px`;
			customCursorRef.current.style.top = `${e.pageY - 30}px`;
			}
		};
		window.addEventListener('mousemove', moveCursor);
		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	}, []);

	if (!addPin) return <></>;

	return (
		<>
			<div 
				ref={customCursorRef} 
				className="maps-go-circle maps-custom-cursor" 
				id="go-cursor"
			>
				<div className="map-pin-wrapper">
				<img 
					className="map-pin-image"
					src={process.env.PUBLIC_URL + "/static/icons/pin.svg"} 
					alt="add-pin" 
					style={{filter: "brightness(0) invert(1)"}}
				/>
				</div>
				</div>
				<div className="add-pin-message">
					Tap anywhere on the <br/>
					map to add a pin
				</div>
		</>
	)
}

Cursor.displayName="Cursor";
