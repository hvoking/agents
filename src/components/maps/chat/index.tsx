// React imports
import { useState, useEffect } from 'react';

// App imports
import { Response } from './response';
import { Input } from './input';
import './styles.scss';

// Context imports
import { useBedrockApi } from 'context/api/bedrock';
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import { Popup } from 'react-map-gl';

export const Chat = ({ coords }: any) => {
	const { lng, lat } = coords;

    // Context hooks
    const { markers, providers, currentMarkerId } = useMarkers();
    const { fetchBedrock } = useBedrockApi();

    // Refs and state
    const [ requestData, setRequestData ] = useState<any>(null);
    const [ requestText, setRequestText ] = useState('');
    const [ responseData, setResponseData ] = useState<any>({});

    const updateResponse = (sender: any, message: any) => {
    	setResponseData((prev: any) => ({
    		...prev,
    		[currentMarkerId]: [
    			...(prev[currentMarkerId] || []),
    			{ sender: sender, message: message },
    		],
    	}));
    }

	useEffect(() => {
		const fetchBedrockModel = async () => {
			const modelResponse = await fetchBedrock(requestText, requestData);
			updateResponse("assistant", modelResponse);
		};

		if (requestData && currentMarkerId) fetchBedrockModel();
	}, [ requestText, requestData ]);

	const currentMarker = currentMarkerId ? markers[currentMarkerId] : null;

	return (
		<Popup 
			longitude={lng} 
			latitude={lat} 
			closeButton={false}
			anchor="top"
		>
			<div className="chat-interface">
				<div className="chat-header">Ask Agent</div>
				<Response 
					responseData={responseData} 
					markerId={currentMarkerId || ''}
				/>
				<Input
					markerId={currentMarkerId}
					currentMarker={currentMarker}
					providers={providers}
					setRequestData={setRequestData}
					updateResponse={updateResponse}
					setRequestText={setRequestText}
				/>
			</div>
		</Popup>
	)
}

Chat.displayName="Chat";