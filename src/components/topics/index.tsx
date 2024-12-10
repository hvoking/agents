// App imports
import { Agents } from './agents';
import { Edit } from './edit';
import { Search } from './search';
import { Basemaps } from './basemaps';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Topics = () => {
	const { activePage } = useMarkers();

	return (
		<div className="topics-wrapper">
			{activePage && <div className="topics">
				{activePage === "add" && <Agents/>}
				{activePage === "edit" && <Edit/>}
				{activePage === "search" && <Search/>}
				{activePage === "basemaps" && <Basemaps/>}
			</div>}
		</div>
	)
}

Topics.displayName="Topics";