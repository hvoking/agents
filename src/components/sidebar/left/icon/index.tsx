// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Icon = ({activeValue, title}: any) => {
	const { setActivePage } = useMarkers();
	const onClick = () => 
		activeValue === "home" ? 
		setActivePage(null) :
		setActivePage(activeValue);

	const defaultPath = `${process.env.PUBLIC_URL}/static/icons/${activeValue}.svg`;

	return (
		<div className="home-wrapper" onClick={onClick}>
			<img src={defaultPath} alt={title} width="30px"/>
			<div>{title}</div>
		</div>
	)
}

Icon.displayName="Icon";