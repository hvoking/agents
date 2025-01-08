// App imports
import { Location } from './location';
import { Buttons } from './buttons';
import './styles.scss';

export const Header = ({ marker, setActiveCharts }: any) => {
	const { name, image } = marker

	const activateCharts = () => setActiveCharts((prev: any) => !prev)
	
	return (
		<div className="card-header" onClick={activateCharts}>
			<img className="agent-icon" src={image} alt="agent-icon"/>
			<div style={{display: "grid"}}>
				<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					<div className="agent-title">{name}</div>
					<Buttons marker={marker}/>			
				</div>
				<Location marker={marker}/>
			</div>
		</div>
	)
}

Header.displayName="Header";