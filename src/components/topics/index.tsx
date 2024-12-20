// App imports
import { Add } from './add';
import { Edit } from './edit';
import { Search } from './search';
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
					{activePage === "edit" && <Edit/>}
					{activePage === "search" && <Search/>}
					{activePage === "basemaps" && <Basemaps/>}
				</div>
			}
		</div>
	)
}

Topics.displayName="Topics";