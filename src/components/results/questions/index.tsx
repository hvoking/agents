// App imports
import { Done } from './done';
import { Header } from './header';
import { Selector } from './selector';
import './styles.scss';

export const Questions = () => {
	return (
		<div className="results-questions">
			<Header/>
			<Selector/>
			<Done/>
		</div>
	)
}

Questions.displayName="Questions";