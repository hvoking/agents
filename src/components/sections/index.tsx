// App imports
import { Add } from './add';
import { Features } from './features';
import { Basemaps } from './basemaps';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';
import { useDraggable } from 'context/events/draggable';

export const Sections = () => {
	const { activePage } = useMarkers();
	const { handleStart, draggableRef } = useDraggable();

	if (!activePage) return null;

	return (
		<div className="topics" ref={draggableRef}>
			<div 
				className="draggable-top" 
				onMouseDown={handleStart} 
			    onTouchStart={handleStart}
			>
				<div className="draggable-tab"></div>
			</div>
			{activePage === "agent" && <Add/>}
			{activePage === "features" && <Features/>}
			{activePage === "basemaps" && <Basemaps/>}
		</div>
	)
}

Sections.displayName="Sections";