// App imports
import { Location } from './location';
import { Filters } from './filters';
import { CancelCross } from './cross';
import './styles.scss';

export const Header = ({ marker }: any) => {
	return (
		<div className="agent-header-wrapper">
			<img className="agent-icon" src={marker.image} alt="agent-icon"/>
			<div>{marker.provider}</div>
			<div></div>
			<div style={{display: "flex", gap: "10px"}}>
				<Filters marker={marker}/>
				<img src={process.env.PUBLIC_URL + "/static/icons/colors.svg"} alt="colors" height={23}/>
				<CancelCross marker={marker}/>
			</div>
				{/*<div className="agent-location">
					<img src={process.env.PUBLIC_URL + "/static/icons/pin.svg"} alt="pin" width="10px"/>
					<Location marker={marker}/>
				</div>*/}
		</div>
	)
}

Header.displayName="Header";