// App imports
import { Slider } from '../slider';
import { Mobility } from './mobility';
import './styles.scss';

export const Boundary = ({ markerId, activeFeature }: any) => {
	return (
		<div className="boundary-selector">
			{activeFeature === "circle" && 
				<div className="options-boundary-circle">
					<Slider 
						markerId={markerId} 
						markerProperty='radius'
						minBound={0.1} 
						maxBound={1}
						title='radius'
					/>
				</div>
			}
			{activeFeature === "iso" && 
				<div>
					<h2 className="options-subtitle">Mobility Type</h2>
					<Mobility markerId={markerId}/>
					<Slider 
						markerId={markerId} 
						minBound={5} 
						maxBound={15} 
						markerProperty={"contoursMinutes"} 
						title={'minutes'}
					/>
				</div>
			}
		</div>
	)
}