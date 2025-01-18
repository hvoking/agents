// App imports
import { Add } from './add';
import { Features } from './features';
import { Basemaps } from './basemaps';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Sections = () => {
	const { activePage } = useMarkers();
	if (!activePage) return null;

	return (
		<div className="topics">
			{activePage === "agent" && <Add/>}
			{activePage === "features" && <Features/>}
			{activePage === "basemaps" && <Basemaps/>}
		</div>
	)
}

Sections.displayName="Sections";