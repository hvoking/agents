// App imports
import { Circle } from './circle';
import { Iso } from './iso';
import { Fill } from './fill';
import { Stroke } from './stroke';
import { Chat } from './chat';
import './styles.scss';

export const Options = ({ marker, activeFeature }: any) => {
	const { id, radius, contoursMinutes, fillOpacity, strokeWidth, strokeOpacity } = marker;
	if (activeFeature === "chat") return <Chat/>;
	return (
		<>
			
			<div className="options-wrapper">
				
				{activeFeature === "circle" && 
	  				<Circle id={id} radius={radius}/>
	  			}
	  			{activeFeature === "iso" && 
		  			<Iso 
		  				id={id} 
		  				contoursMinutes={contoursMinutes}
		  			/>
		  		}
				{activeFeature === "fill" && 
					<Fill 
						id={id} 
						fillOpacity={fillOpacity}
					/>
				}
				{activeFeature === "stroke" && 
					<Stroke 
						id={id} 
						strokeWidth={strokeWidth}
						strokeOpacity={strokeOpacity}
					/>
				}
			</div>
		</>
	)
}

Options.displayName="Options";