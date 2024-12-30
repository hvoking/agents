// App imports
import { sections } from './sections';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Buttons = () => {
	const { activePage, setActivePage } = useMarkers();

	const activatePage = (section: any) => 
		section === "home" ? 
		setActivePage(null) : 
		setActivePage(section);

	return (
		<div className="buttons-wrapper">
			{sections.map((item: any, index: number) => {
				const title = item.title;
				const section = item.section;
				const iconPath = `${process.env.PUBLIC_URL}/static/icons/${section}.svg`;

				const isActiveSection = activePage === section ? "active" : "";

				return (
					<div 
						key={index} 
						className={`menu-item ${isActiveSection}`} 
						onClick={() => activatePage(section)}
					>
						<img src={iconPath} alt={title} width="30px"/>
						<span>{title}</span>
					</div>
				)
			})}
		</div>
	)
}

Buttons.displayName="Buttons";