// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/markers';

export const Section = ({ section, title }: any) => {
	const { activePage, setActivePage } = useMarkers();
	const isActiveSection = activePage === section ? "active" : "";
	const iconPath = `${process.env.PUBLIC_URL}/static/icons/${section}.svg`;

	return (
		<div 
			className={`menu-item ${isActiveSection}`} 
			onClick={() => setActivePage(section)}
		>
			<img src={iconPath} alt={title} width="30px"/>
			<span className="section-text">{title}</span>
		</div>
	)
}

Section.displayName="Section";