// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const AddPin = () => {
	const { addPin, setAddPin } = useMarkers();

	const onClick = () => {
		setAddPin((prev: boolean) => !prev);
	};

	const currentStroke = addPin ? "rgba(255, 255, 255, 1)" : "rgba(33, 33, 43, 1)";

	return (
		<div 
			className="map-add-pin" 
			onClick={onClick}
			style={{
				backgroundColor: addPin ? "rgba(33, 33, 43, 1)" : ""
			}}
		>
			<div className="map-pin-wrapper">
				<img 
					className="map-pin-image"
					src={process.env.PUBLIC_URL + "/static/icons/pin.svg"} 
					alt="add-pin" 
					style={{filter: addPin ? "brightness(0) invert(1)" : ""}}
				/>
				<svg viewBox="0 0 20 20" width="50px">
					<line
						x1={14.5}
						x2={18.5}
						y1={7}
						y2={7}	
						stroke={currentStroke}
					/>
					<line
						x1={16.5}
						x2={16.5}
						y1={5}
						y2={9}
						stroke={currentStroke}
					/>
					
				</svg>
			</div>
		</div>
	)
}

AddPin.displayName="AddPin";