// App imports
import { Location } from './location';
import { Buttons } from './buttons';
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
				{/*<Location marker={marker}/>*/}
			</div>
			<div></div>
			<Buttons marker={marker} activeCharts={activeCharts} setActiveCharts={setActiveCharts}/>			
		</div>
	)
}

Header.displayName="Header";