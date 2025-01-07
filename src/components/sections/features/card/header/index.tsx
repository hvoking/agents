// App imports
import { Location } from './location';
import { Filters } from './filters';
import { CancelCross } from './cross';
import { Arrow } from './arrow';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Header = ({ marker, activeCharts, setActiveCharts }: any) => {
	const { name, image } = marker
	const { providers } = useMarkers();

	const currentProvider = providers.find((item: any) => item.name === name);
	const label = currentProvider.label;
	
	return (
		<div className="agent-header-wrapper">
			<img className="agent-icon" src={image} alt="agent-icon"/>
			<div className="agent-details">
				<div className="agent-title">{label}</div>
				{/*<div className="agent-location">
					<img 
						src={process.env.PUBLIC_URL + "/static/icons/pin.svg"} 
						alt="pin" 
						width="10px"
					/>
					<Location marker={marker}/>
				</div>*/}
			</div>
			<div></div>
			<div className="header-buttons">
				<Filters marker={marker}/>
				<Arrow activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>
				<CancelCross marker={marker}/>
			</div>
			
		</div>
	)
}

Header.displayName="Header";