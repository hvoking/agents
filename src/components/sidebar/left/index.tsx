// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Left = () => {
	const { setActivePage } = useMarkers();

	return (
		<div className="sidebar-left-wrapper">
			<div 
				className="home-wrapper"
				onClick={() => setActivePage(null)}
			>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/home.svg"} 
					alt="home" 
					width="30px"
					
				/>
				<div>Home</div>
			</div>
			<div 
				className="home-wrapper"
				onClick={() => setActivePage("add")}
			>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/bot.svg"} 
					alt="add-pin" 
					width="30px"
				/>
				<div>Add Agent</div>
			</div>
			<div 
				className="home-wrapper"
				onClick={() => setActivePage("edit")}
			>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/edit.svg"} 
					alt="edit-pin" 
					width="30px"
				/>
				<div>Edit</div>
			</div>
			<div 
				className="home-wrapper"
				onClick={() => setActivePage("search")}
			>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/search.svg"} 
					alt="search" 
					width="30px"
				/>
				<div>Search</div>
			</div>
			<div 
				className="home-wrapper"
				onClick={() => setActivePage("basemaps")}
			>
				<img 
					src={process.env.PUBLIC_URL + "/static/icons/basemaps.svg"} 
					alt="search" 
					width="30px"
				/>
				<div>Basemaps</div>
			</div>
		</div>
	)
}

Left.displayName="Left";