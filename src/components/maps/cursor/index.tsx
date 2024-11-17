// App imports
import './styles.scss';

// React imports
import { useEffect, useRef } from 'react';

export const Cursor = () => {
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

	return (
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
	      <svg viewBox="0 0 20 20" width="50px">
	        <line
	          x1={14.5}
	          x2={18.5}
	          y1={7}
	          y2={7}  
	          stroke="rgba(255, 255, 255, 1)"
	        />
	        <line
	          x1={16.5}
	          x2={16.5}
	          y1={5}
	          y2={9}
	          stroke="rgba(255, 255, 255, 1)"
	        />
	      </svg>
	    </div>
	  </div>
	)
}

Cursor.displayName="Cursor";
