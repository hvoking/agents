// App imports
import './styles.scss';

// Context imports
import { useReverseGeocodingApi } from 'context/api/google/reverse';

export const Title = () => {
	const { placeInfo } = useReverseGeocodingApi();

	return (
		<div className="maps-title-wrapper">
			{placeInfo}
		</div>
	)
}

Title.displayName="Title";