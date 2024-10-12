// React imports
import { useState, useContext, createContext } from 'react';

// App imports
import { questionsArray } from './data';

const TopicsContext: React.Context<any> = createContext(null);

export const useTopics = () => {
	return (
		useContext(TopicsContext)
	)
}

const topics = {
  0: "PHYSICAL SAFETY",
  1: "NAVIGATION",
  2: "INFRASTRUCTURE & URBAN DESIGN",
  3: "SOCIAL & COMMUNITY FACTORS", 
  4: "HEALTH AND WELLBEING"
};

export const TopicsProvider = ({children}: any) => {
	const [ topicIndex, setTopicIndex ] = useState(0);
	const [ questions, setQuestions ] = useState(questionsArray);
	const [ currentQuestionId, setCurrentQuestionId ] = useState<any>(null);

	return (
		<TopicsContext.Provider value={{
			topicIndex, setTopicIndex,
			topics, 
			questions, setQuestions,
			currentQuestionId, setCurrentQuestionId
		}}>
			{children}
		</TopicsContext.Provider>
	)
}

TopicsContext.displayName = "TopicsContext";