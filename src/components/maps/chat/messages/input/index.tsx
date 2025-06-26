// React imports
import { useState } from 'react';

// App imports
import { processData } from './data';
import './styles.scss';

// Context imports
import { useMask } from 'context/mask';
import { useReverseGeocodingApi } from 'context/api/google/reverse';

const prefix: any = {
	LineString: "lines-source-",
	Point: "points-source-",
	Polygon: "polygons-source-",
}
const color: any = {
	LineString: 'line-color',
	Point: 'circle-color',
	Polygon: 'fill-color',
}

export const Input = ({ markerId, currentMarker, providers, setRequestData, updateResponse, setRequestText }: any) => {
	const [ searchText, setSearchText ] = useState<any>(null);
	const { sharedGeoJsonDataMap } = useMask();
	const { currentAddress } = useReverseGeocodingApi();

	const handleChange = (e: any) => {
		const query = e.target.value;
		setSearchText(query);
	};

	const cleanSuggestions = () => {
		setSearchText("");
	}

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
					geobot_info: currentMarker, 
					data_provider_info: currentProvider, 
					current_layer_data: processedData,
					location_info: currentAddress,
				}
				processedData && setRequestData(geoInfo)
			}
		}
	};

	const onClick = () => sendRequest(searchText);

	const onKeyDown = (e: any) => {
		if (e.keyCode === 13) { // enter
			const currentText: any = e.target.value;
			sendRequest(currentText);
		}
		else if (e.keyCode === 27) { // scape
			setSearchText("");
		}
	};

	return (
		<div className="chat-input-container">
			<textarea
				className="chat-input"
				placeholder="Type your message here..."
				value={searchText ? searchText : ""}
				spellCheck={false}
				onChange={handleChange}
				onKeyDown={onKeyDown}
			/>
			<button 
				className="chat-send-button" 
				onClick={onClick}
			>
				Send
			</button>
		</div>
	)
}

Input.displayName="Input";