// App imports
import { Suggestions } from './suggestions';
import { SearchIcon } from './icon';
import { Cross } from './cross';
import { SearchInput } from './input';
import './styles.scss';

export const Search = () => {
	return (
		<div className="search-wrapper">
			<div className="search-input">
				<div className="maps-search">
					<SearchIcon/>
					<SearchInput/>
					<Cross/>
					<Suggestions/>
				</div>
			</div>
		</div>
	)
}

Search.displayName="Search";