// App imports
import { Slider } from './slider';
import { Mobility } from './mobility';
import { Color } from './color';
import './styles.scss';

export const Options = ({ markerId, activeFeature, colorPalette }: any) => {
	if (!activeFeature) return <></>;
	
	return (
		<div className="options-wrapper">
		  {activeFeature === "circle" && 
  				<Slider 
  					markerId={markerId} 
  					markerProperty='radius'
  					minBound={0} 
  					maxBound={1}
  					title={"Radius"}
  				/>
  			}
  			{activeFeature === "iso" && 
	  			<>
	  				<div>
	  					<div className="options-title">Mobility Type</div>
	  					<Mobility markerId={markerId}/>
	  				</div>
	  				<Slider 
	  					markerId={markerId} 
	  					minBound={5} 
	  					maxBound={15} 
	  					markerProperty={"contoursMinutes"} 
	  					title={"Minutes"}
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
					/>
					<Slider 
						markerId={markerId} 
						minBound={0} 
						maxBound={1} 
						markerProperty={'strokeOpacity'} 
						title={"Opacity"}
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