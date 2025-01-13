// App imports
import { Boundary } from './boundary';
import { Colors } from './colors'
import { Search } from './search'
import './styles.scss';

export const Header = ({ markerId, activeFeature, setActiveFeature }: any) => {
	return (
		<div className="header-selector">
			<Boundary 
				activeFeature={activeFeature}
				setActiveFeature={setActiveFeature} 
				markerId={markerId}
			/>
			<Colors 
				activeFeature={activeFeature}
				setActiveFeature={setActiveFeature}
			/>
			<Search/>
		</div>
	)
}

Header.displayName="Header";