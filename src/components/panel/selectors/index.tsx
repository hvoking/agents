// App imports
import { sections } from './sections';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Selectors = () => {
	const { setActivePage } = useMarkers();

	const activatePage = (section: any) => 
		section === "home" ? 
		setActivePage(null) : 
		setActivePage(section);

	return (
		<div className="selectors">
			{sections.map((item: any, index: number) => {
				const title = item.title;
				const section = item.section;
				const iconPath = `${process.env.PUBLIC_URL}/static/icons/${section}.svg`;

				return (
					<div 
						key={index} 
						className="menu-item" 
						onClick={() => activatePage(section)}
					>
						<img src={iconPath} alt={title} width="30px"/>
						<div>{title}</div>
					</div>
				)
			})}
		</div>
	)
}

Selectors.displayName="Selectors";