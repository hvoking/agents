// App imports
import { processData } from './data';
import './styles.scss';

// Context imports
import { useChatEvents } from 'context/events/chat';
import { useMask } from 'context/agents/mask';

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

export const Container = ({ setRequestData, markerId, updateResponse, providers, markers, setRequestText }: any) => {
	const { searchText, handleChange, onKeyDown, cleanSuggestions } = useChatEvents();
	const { sharedGeoJsonDataMap } = useMask();

    const sendRequest = (currentText: any) => {
    	setRequestText(currentText);
    	updateResponse("user", currentText)
    	cleanSuggestions();

    	const currentMarker = markerId ? markers[markerId] : null;

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
					"current_layer_data": processedData
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