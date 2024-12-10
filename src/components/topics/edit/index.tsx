// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Edit = () => {
	const { filteredMarkers } = useMarkers();

	return (
		<div className="agent-selector">
			<div className="agent-selector-title">Edit your agent</div>
			<div className="edit-selector-wrapper">
				{filteredMarkers && filteredMarkers.map((item: any) => {
					return(
						<div className="edit-selector-item">
							{item.id}
						</div>
					)
				})}
			</div>
		</div>
	)
}

Edit.displayName="Edit";