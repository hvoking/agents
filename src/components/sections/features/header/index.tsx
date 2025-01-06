// App imports
import { Location } from './location';
import { Filters } from './filters';
import { Colors } from './colors';
import { CancelCross } from './cross';
import './styles.scss';

export const Header = ({ marker }: any) => {
	const { name, image } = marker
	return (
		<div className="agent-header-wrapper">
			<img className="agent-icon" src={image} alt="agent-icon"/>
			<div className="agent-details">
				<div className="agent-title">{name}</div>
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
				<Colors marker={marker}/>
				<CancelCross marker={marker}/>
			</div>
			
		</div>
	)
}

Header.displayName="Header";