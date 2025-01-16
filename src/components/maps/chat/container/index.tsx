// App imports
import { processData } from './data';
import './styles.scss';

// Context imports
import { useChatEvents } from 'context/events/chat';
import { useMask } from 'context/agents/mask';
import { useReverseGeocodingApi } from 'context/api/google/reverse';

const prefix: any = {
	"LineString": "lines-source-",
	"Point": "points-source-",
	"Polygon": "polygons-source-",
}
const color: any = {
	"LineString": 'line-color',
	"Point": 'circle-color',
	"Polygon": 'fill-color',
}

export const Container = ({ markerId, currentMarker, providers, setRequestData, updateResponse, setRequestText }: any) => {
	const { searchText, handleChange, onKeyDown, cleanSuggestions } = useChatEvents();
	const { sharedGeoJsonDataMap } = useMask();
	const { currentAddress } = useReverseGeocodingApi();

    const sendRequest = (currentText: any) => {
    	setRequestText(currentText);
    	updateResponse("user", currentText)
    	cleanSuggestions();

    	if (currentMarker || currentMarker.length > 0) {
    		const { name } = currentMarker;
    		const currentProvider = providers.find((item: any) => item.name === name);

    		if (currentProvider) {
    			const { type: currentType, columnName } = currentProvider;
    			
    			const sourcePrefix = prefix[currentType];
    			const colorLabel = color[currentType];

				const data = sharedGeoJsonDataMap.value[sourcePrefix + markerId];
				const processedData = processData(data, columnName, colorLabel);
				const geoInfo = {
					"geobot_info": currentMarker, 
					"data_provider_info": currentProvider, 
					"current_layer_data": processedData,
					"location_info": currentAddress,
				}
				processedData && setRequestData(geoInfo)
			}
		}
	};

	return (
		<div className="chat-input-container">
			<textarea
				className="chat-input"
				placeholder="Type your message here..."
				value={searchText ? searchText : ""}
				onChange={handleChange}
				spellCheck={false}
				onKeyDown={onKeyDown}
			/>
			<button 
				className="chat-send-button" 
				onClick={() => sendRequest(searchText)}
			>
				Send
			</button>
		</div>
	)
}

Container.displayName="Container";