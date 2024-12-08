// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Listing = () => {
	const { filteredMarkers } = useMarkers();

	return (
		<div className="agents-list-wrapper">
			<>
				{filteredMarkers && filteredMarkers.map((item: any) => {
					return(
						<div className="agent-item">
							{item.id}
						</div>
					)
				})}
			</>
		</div>
	)
}

Listing.displayName="Listing";