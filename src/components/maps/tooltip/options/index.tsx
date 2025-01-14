// App imports
import { Slider } from './slider';
import { Mobility } from './boundary/mobility';
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
  					minBound={0.1} 
  					maxBound={1}
  				/>
  			}
  			{activeFeature === "iso" && 
	  			<>
	  				<div>
	  					<h2 className="options-subtitle">Mobility Type</h2>
	  					<Mobility markerId={markerId}/>
	  				</div>
	  				<Slider 
	  					markerId={markerId} 
	  					minBound={5} 
	  					maxBound={15} 
	  					markerProperty={"contoursMinutes"} 
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
					/>
					<Slider 
						markerId={markerId} 
						minBound={0} 
						maxBound={1} 
						markerProperty={'strokeOpacity'} 
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