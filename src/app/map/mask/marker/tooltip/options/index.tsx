// App imports
import { Slider } from './slider';
import { Mobility } from './mobility';
import { Color } from './color';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Options = ({ marker, activeFeature }: any) => {
	const { colorPalette } = useMarkers();
	const { id, radius, contoursMinutes, fillOpacity, strokeWidth, strokeOpacity } = marker;
	
	return (
		<div className="options-wrapper">
		  {activeFeature === "circle" && 
  				<Slider 
  					markerId={id}
  					markerProperty='radius'
  					minBound={0} 
  					maxBound={1}
  					title={"Radius"}
  					initialState={radius}
  				/>
  			}
  			{activeFeature === "iso" && 
	  			<>
	  				<Mobility markerId={id}/>
	  				<Slider 
	  					markerId={id}
	  					minBound={5} 
	  					maxBound={15} 
	  					markerProperty={"contoursMinutes"} 
	  					title={"Minutes"}
	  					initialState={contoursMinutes}
	  				/>
	  			</>
	  		}
			{activeFeature === "fill" && 
				<>
					<Slider 
						markerId={id}
						minBound={0} 
						maxBound={1} 
						markerProperty={'fillOpacity'}
						title={"Opacity"}
						initialState={fillOpacity}
					/>
					<Color 
						markerId={id}
						colorPalette={colorPalette}
						markerProperty={'fillColor'}
					/>
				</>
			}
			{activeFeature === "stroke" && 
				<>
					<Slider 
						markerId={id}
						minBound={0} 
						maxBound={10} 
						markerProperty={'strokeWidth'} 
						title={"Thickness"}
						initialState={strokeWidth}
					/>
					<Slider 
						markerId={id}
						minBound={0} 
						maxBound={1} 
						markerProperty={'strokeOpacity'} 
						title={"Opacity"}
						initialState={strokeOpacity}
					/>
					<Color 
						markerId={id}
						colorPalette={colorPalette}
						markerProperty={'stroke'}
					/>
				</>
			}
		</div>
	)
}

Options.displayName="Options";