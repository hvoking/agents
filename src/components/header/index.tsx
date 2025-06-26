// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Header = () => {
	const { setActivePage } = useMarkers();
	const onClick = () => setActivePage(null);
	
	return (
		<div className="header">
			<img 
				src={process.env.PUBLIC_URL + "/static/logos/logo.svg"} 
				alt="logo" 
				height="40px"
				onClick={onClick}
			/>
		</div>
	)
}

Header.displayName="Header";