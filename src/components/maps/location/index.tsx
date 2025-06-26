// App imports
import './styles.scss';

// Context imports
import { useReverseGeocodingApi } from 'context/api/google/reverse';

export const Location = () => {
	const { placeInfo } = useReverseGeocodingApi();

	return (
		<div className="map-location">
			{placeInfo}
		</div>
	)
}

Location.displayName="Location";