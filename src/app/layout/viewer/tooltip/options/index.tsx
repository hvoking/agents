// App imports
import { Slider } from './slider';
import { Mobility } from './mobility';
import { Color } from './color';
import './styles.scss';

export const Options = ({ markerId, activeFeature, colorPalette, currentMarker }: any) => {
	if (!activeFeature) return <></>;

	const { radius, contoursMinutes, fillOpacity, strokeWidth, strokeOpacity } = currentMarker;
	
	return (
		<div className="options-wrapper">
		  {activeFeature === "circle" && 
  				<Slider 
  					markerId={markerId} 
  					markerProperty='radius'
  					minBound={0} 
  					maxBound={1}
  					title={"Radius"}
  					initialState={radius}
  				/>
  			}
  			{activeFeature === "iso" && 
	  			<>
	  				<Mobility markerId={markerId}/>
	  				<Slider 
	  					markerId={markerId} 
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
						markerId={markerId} 
						minBound={0} 
						maxBound={1} 
						markerProperty={'fillOpacity'}
						title={"Opacity"}
						initialState={fillOpacity}
					/>
					<Color 
						markerId={markerId} 
						colorPalette={colorPalette}
						markerProperty={'fillColor'}
					/>
				</>
			}
			{activeFeature === "stroke" && 
				<>
					<Slider 
						markerId={markerId} 
						minBound={0} 
						maxBound={10} 
						markerProperty={'strokeWidth'} 
						title={"Thickness"}
						initialState={strokeWidth}
					/>
					<Slider 
						markerId={markerId} 
						minBound={0} 
						maxBound={1} 
						markerProperty={'strokeOpacity'} 
						title={"Opacity"}
						initialState={strokeOpacity}
					/>
					<Color 
						markerId={markerId} 
						colorPalette={colorPalette}
						markerProperty={'stroke'}
					/>
				</>
			}
		</div>
	)
}

Options.displayName="Options";