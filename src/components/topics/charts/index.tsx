// App imports
import { CancelCross } from './cross';
import { Graphics } from './graphics';
import { Location } from './location';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Charts = () => {
	const { markers } = useMarkers();
	
	if (!(markers.length > 0)) return <></>

	return (
		<div className="charts">
			{markers.map((marker: any, index: number) => {
				const imagePath = process.env.PUBLIC_URL + "/static/icons/pin.svg";
				
				return(
					<div key={index} className="agent-card">
						<CancelCross marker={marker}/>
						<div>
							<img className="agent-icon" src={marker.image} alt="agent-icon"/>
							<div className="agent-data">
								<div>{`Agent ${index + 1}`}</div>
								<div className="agent-location">
									<img src={imagePath} alt="pin" width="10px"/>
									{/*<Location marker={marker}/>*/}
								</div>
							</div>
						</div>
						<Graphics id={index}/>
					</div>
				)
			})}
		</div>
	)
}

Charts.displayName="Charts";