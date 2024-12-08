// App imports
import './styles.scss';

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Left = () => {
	const { setActivePage } = useMarkers();

	return (
		<div className="sidebar-left-wrapper">
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/home.svg"} 
				alt="home" 
				width="30px"
				onClick={() => setActivePage("home")}
			/>
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/bot.svg"} 
				alt="add-pin" 
				width="30px"
				onClick={() => setActivePage("add")}
			/>
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/edit.svg"} 
				alt="edit-pin" 
				width="30px"
				onClick={() => setActivePage("edit")}
			/>
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/search.svg"} 
				alt="search" 
				width="30px"
				onClick={() => setActivePage("search")}
			/>
		</div>
	)
}

Left.displayName="Left";