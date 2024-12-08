// App imports
import { Home } from './home'
import { Selector } from './selector'
import { Listing } from './listing'
import { Search } from './search'

// Context imports
import { useMarkers } from 'context/maps/markers';

export const Right = () => {
	const { activePage } = useMarkers();

	return (
		<div className="selected-options">
			{activePage === "home" && <Home/>}
			{activePage === "add" && <Selector/>}
			{activePage === "edit" && <Listing/>}
			{activePage === "search" && <Search/>}
		</div>
	)
}

Right.displayName="Right";