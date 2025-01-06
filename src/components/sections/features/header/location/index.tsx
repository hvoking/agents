// React imports
import { useState, useEffect } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useReverseGeocodingApi } from 'context/api/google/reverse';

export const Location = ({ marker }: any) => {
	const [ addressName, setAddressName ] = useState('')
	const { getCurrentAddress } = useReverseGeocodingApi();

	useEffect(() => {
		const loadData = async () => {
			const currentAddress = await getCurrentAddress(marker.longitude, marker.latitude);
			const addressNumber = currentAddress[0].long_name;
			const addressStreet = currentAddress[1].long_name;
			setAddressName(addressStreet + ", " + addressNumber);
		};
		loadData();
	}, [ marker ]);

	return (
		<div>
			{addressName}
		</div>

	)
}

Location.displayName="Location";