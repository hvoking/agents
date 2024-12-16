// App imports
import { sections } from './sections';
import './styles.scss';

// Context imports
import { useMarkers } from 'context/agents/markers';

export const Left = () => {
	const { setActivePage } = useMarkers();
	const onClick = (section: any) => 
		section === "home" ? 
		setActivePage(null) : 
		setActivePage(section);

	return (
		<div className="sidebar-left-wrapper">
			{sections.map((item: any, index: number) => {
				const title = item.title;
				const section = item.section;
				const path = `${process.env.PUBLIC_URL}/static/icons/${section}.svg`;

				return (
					<div 
						key={index} 
						className="home-wrapper" 
						onClick={() => onClick(section)}
					>
						<img src={path} alt={title} width="30px"/>
						<div>{title}</div>
					</div>
				)
			})}
		</div>
	)
}

Left.displayName="Left";