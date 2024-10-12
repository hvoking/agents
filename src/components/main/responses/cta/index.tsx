// React imports
import { useState } from 'react';

// App imports
import './styles.scss';

// Context imports
import { useTopics } from '../../../context/topics';
import { useMarkers } from '../../../context/maps/markers';

// Third-party imports
import { useNavigate } from 'react-router-dom';

export const CTA = () => {
	const navigate = useNavigate();

	const { setQuestions } = useTopics();
	const { setMarkers, setCurrentMarker } = useMarkers();

	const resetAllPins = () => {
		setCurrentMarker(null);
		setMarkers([]);
		setQuestions((prevQuestions: any) => {
			return prevQuestions.map((question: any) => ({
				...question,
				pins: [],
			}));
		});
	};

	const newUser = () => {
		resetAllPins();
		navigate('/vision');
	};

	return (
		<div className="responses-cta-wrapper">
			<div className="new-response-wrapper">
				<div 
					className="responses-cta" 
					onClick={newUser}
				>
					NEW RESPONSE
				</div>
			</div>
			<div 
				className="responses-cta" 
				onClick={() => navigate('/results')}
			>
				VISUALIZE RESULTS
			</div>
		</div>
	)
}

CTA.displayName="CTA";