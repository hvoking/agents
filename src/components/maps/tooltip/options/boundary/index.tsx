// App imports
import { Circle } from './circle';
import { Isochrone } from './isochrone';
import './styles.scss';

export const Boundary = ({ markerId, activeFeature }: any) => {
	return (
		<div className="boundary-selector">
			{activeFeature === "circle" && 
				<div className="options-boundary-circle">
					<Circle 
						markerId={markerId} 
						markerProperty='radius'
						minBound={0.1} 
						maxBound={1}
						title='radius'
					/>
				</div>
			}
			{activeFeature === "iso" && 
				<Isochrone 
					markerId={markerId} 
					markerProperty='contoursMinutes'
					minBound={5} 
					maxBound={15}
					title='minutes'
				/>
			}
		</div>
	)
}