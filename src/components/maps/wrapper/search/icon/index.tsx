// App imports
import './styles.scss';

export const SearchIcon = () => {
	return (
		<div className="search-icon">
		    <img 
		    	src={process.env.PUBLIC_URL + "/static/icons/search.svg"}
		    	alt="search" 
		    	width="20px"
		    />
		</div>
	)
}

SearchIcon.displayName="SearchIcon";