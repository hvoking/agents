// App imports
import { Icon } from './icon';
import './styles.scss';

export const Left = () => {
	
	const sections = [
		{activeValue: "home", title: "Home"}, 
		{activeValue: "bot", title: "Add Agent"}, 
		{activeValue: "edit", title: "Edit"}, 
		{activeValue: "search", title: "Search"}, 
		{activeValue: "basemaps", title: "basemaps"}
	];

	return (
		<div className="sidebar-left-wrapper">
			{sections.map((item: any) => {
				return (
					<Icon 
						title={item.title}
						activeValue={item.activeValue}
					/>
				)
			})}
		</div>
	)
}

Left.displayName="Left";