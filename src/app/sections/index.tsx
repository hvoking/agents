// App imports
import { Agents } from './agents';
import { Features } from './features';
import { Basemaps } from './basemaps';
import { Cross } from './cross';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';
import { useDraggable } from 'context/events/draggable';

const sections = [
	{
	  id: 'agent',
	  title: 'Select Your Agent',
	  subtitle: 'Choose an agent from the options to explore the data they represent.',
	  Component: Agents,
	},
	{
	  id: 'basemaps',
	  title: 'Select Your Basemap',
	  subtitle: 'Choose a basemap from the options below.',
	  Component: Basemaps,
	},
	{
	  id: 'features',
	  title: 'Visible Features',
	  subtitle: 'Custom Data Visualizations',
	  Component: Features,
	},
];

export const Sections = () => {
	const { activePage } = useMarkers();
	const { handleStart, draggableRef } = useDraggable();

	if (!activePage) return null;

	const section = sections.find((s) => s.id === activePage);
	if (!section) return null;

	const { title, subtitle, Component } = section;

	return (
		<div className="topics" ref={draggableRef}>
			<div 
				className="draggable-top" 
				onMouseDown={handleStart} 
			    onTouchStart={handleStart}
			>
				<div className="draggable-tab"></div>
			</div>
			<div className="sections">
		      <div className="section-grid">
				<Cross/>
		        <h2>{title}</h2>
		        <p className="section-items">{subtitle}</p>
		        <Component/>
		      </div>
		    </div>
		</div>
	)
}

Sections.displayName="Sections";