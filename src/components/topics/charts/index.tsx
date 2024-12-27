// App imports
import { CancelCross } from './cross';
import { Header } from './header';
import { Graphics } from './graphics';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Charts = () => {
	const { markers } = useMarkers();
	
	if (!(markers.length > 0)) return <></>

	return (
		<div className="charts">
			{markers.map((marker: any, index: number) => {
				return(
					<div key={index} className="agent-card">
						<CancelCross marker={marker}/>
						<Header name={`Agent ${index + 1}`} marker={marker}/>
						<Graphics id={index}/>
					</div>
				)
			})}
		</div>
	)
}

Charts.displayName="Charts";