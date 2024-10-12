// App imports
import './styles.scss';

// Context imports
import { useTopics } from '../../../../context/topics';

export const Selector = () => {
	const { questions, setCurrentQuestionId, currentQuestionId } = useTopics();
	const imgPath = process.env.PUBLIC_URL + '/static/icons/map-pin.svg';

	return (
			<div className="results-selector">
				{questions.map((item: any, index: any) => {
					return (
						<div 
							className="results-questions-item" 
							onClick={() => setCurrentQuestionId(index)}
							style={{
								backgroundColor: currentQuestionId === index ? "rgba(233, 12, 131, 0.6)" : "rgba(255, 255, 255, 1)",
								color: currentQuestionId === index ? "rgba(255, 255, 255, 1)" : "rgba(126, 126, 132, 1)",
							}}
						>
							<div>Question {index + 1}</div>
							<img src={imgPath} alt="map-pin" height="20px" style={{filter: currentQuestionId === index ? "brightness(0) invert(1)" : ""}}/>
						</div>
					)
				})}
			</div>
	)
}

Selector.displayName="Selector";