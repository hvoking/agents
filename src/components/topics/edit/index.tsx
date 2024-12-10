// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Edit = () => {
	const { filteredMarkers } = useMarkers();

	return (
		<div className="agent-selector">
			<div className="agent-selector-title">EDIT YOUR AGENT</div>
			<div className="edit-selector-wrapper">
				{filteredMarkers && filteredMarkers.map((item: any) => {
					return(
						<div className="edit-selector-item">
							<img src={item.image} alt="marker-icon" width="40px"/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

Edit.displayName="Edit";