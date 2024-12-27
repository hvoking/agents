// App imports
import { Add } from './add';
import { Charts } from './charts';
import { Basemaps } from './basemaps';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Topics = () => {
	const { activePage } = useMarkers();

	return (
		<div className="topics-wrapper">
			{activePage && 
				<div className="topics">
					{activePage === "bot" && <Add/>}
					{activePage === "charts" && <Charts/>}
					{activePage === "basemaps" && <Basemaps/>}
				</div>
			}
		</div>
	)
}

Topics.displayName="Topics";