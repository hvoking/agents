// App imports
import { Agents } from './agents';
import { Listing } from './listing';
import { Search } from './search';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Topics = () => {
	const { activePage } = useMarkers();

	return (
		<div className="topics-wrapper">
			{activePage && <div className="topics">
				{activePage === "add" && <Agents/>}
				{activePage === "edit" && <Listing/>}
				{activePage === "search" && <Search/>}
			</div>}
		</div>
	)
}

Topics.displayName="Topics";