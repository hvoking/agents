// App imports
import { Add } from './add';
import { Charts } from './charts';
import { Basemaps } from './basemaps';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Sections = () => {
	const { activePage } = useMarkers();

	return (
		<>
			{activePage && 
				<div className="topics">
					{activePage === "agent" && <Add/>}
					{activePage === "charts" && <Charts/>}
					{activePage === "basemaps" && <Basemaps/>}
				</div>
			}
		</>
	)
}

Sections.displayName="Sections";