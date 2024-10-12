// App imports
import './styles.scss';

// Third-party imports
import { useNavigate } from 'react-router-dom';

export const Done = () => {
	const navigate = useNavigate();

	return (
		<div className="result-done-button">
			<div className="finish-button" onClick={() => navigate('/ending')}>
				Done
			</div>
		</div>
	)
}

Done.displayName="Done";