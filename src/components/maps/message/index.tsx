// React imports
import { useState, useEffect } from 'react';

// App imports
import { Response } from './response';
import './styles.scss';

// Context imports
import { useMessageEvents } from 'context/events/message';
import { useBedrockApi } from 'context/api/bedrock';
import { useMarkers } from 'context/agents/markers';
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Popup } from 'react-map-gl';

export const Message = ({ coords }: any) => {
	const { lng, lat } = coords;

    // Context hooks
    const { markers, providers, currentMarkerId } = useMarkers();
    const { searchText, handleChange, onKeyDown, cleanSuggestions } = useMessageEvents();
    const { fetchBedrock } = useBedrockApi();
    const { sharedGeoJsonDataMap } = useMask();

    // Refs and state
    const [ requestData, setRequestData ] = useState<any>(null);
    const [ requestText, setRequestText ] = useState('');
    const [ responseData, setResponseData ] = useState<any>({});

	useEffect(() => {
		const fetchBedrockModel = async () => {
			const modelResponse = await fetchBedrock(requestText, requestData);

			setResponseData((prev: any) => ({
				...prev,
				[currentMarkerId]: [
					...(prev[currentMarkerId] || []),
					{ sender: 'assistant', message: modelResponse.data },
				],
			}));
		};

		if (requestData && currentMarkerId) fetchBedrockModel();
	}, [ requestText, requestData ]);

    const sendRequest = (currentText: any) => {
    	setRequestText(currentText);
    	cleanSuggestions();
    	const knowledgeBase = currentMarkerId ? markers[currentMarkerId] : null;

    	if (knowledgeBase || knowledgeBase.length > 0) {
    		const { name } = knowledgeBase;
    		const currentProvider = providers.find((item: any) => item.name === name);

    		if (currentProvider) {
    			const { type: currentType } = currentProvider;
    			const sourcePrefix =
	    			currentType === 'LineString' ? 
	    			'lines-source-' : 
	    			currentType === 'Point' ? 
	    			'points-source-' : 
	    			'polygons-source-';

				const data = sharedGeoJsonDataMap.value[sourcePrefix + currentMarkerId];

				if (data) {
	                setResponseData((prev: any) => ({
	                    ...prev,
	                    [currentMarkerId]: [
	                        ...(prev[currentMarkerId] || []),
	                        { sender: 'user', message: currentText },
	                    ],
	                }));
	                setRequestData(data);
	            }
			}
		}
	};

	return (
		<Popup longitude={lng} latitude={lat} closeButton={false}>
			<div className="chat-interface">
				<div className="chat-header">Assistant Chat</div>
				<Response 
					responseData={responseData} 
					markerId={currentMarkerId || ''} 
				/>
				<div className="chat-input-container">
					<textarea
						className="chat-input"
						placeholder="Type your message here..."
						value={searchText}
						onChange={handleChange}
						spellCheck={false}
						onKeyDown={onKeyDown}
					/>
					<button className="chat-send-button" onClick={() => sendRequest(searchText)}>
						Send
					</button>
				</div>
			</div>
		</Popup>
	)
}

Message.displayName="Message";