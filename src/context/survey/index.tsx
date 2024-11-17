// React imports
import { useState, useContext, createContext } from 'react';

const SurveyContext: React.Context<any> = createContext(null);

export const useSurvey = () => {
	return (
		useContext(SurveyContext)
	)
}

export const SurveyProvider = ({children}: any) => {
	const [ race, setRace ] = useState(null);
	const [ gender, setGender ] = useState(null);
	const [ age, setAge ]  = useState(null);
	const [ ability, setAbility ]  = useState(null);
	const [ selectedCity, setSelectedCity ] = useState(null);
	const [ locationName, setLocationName ] = useState(null);
	
	return (
		<SurveyContext.Provider value={{
			race, setRace,
			gender, setGender,
			age, setAge,
			ability, setAbility,
			selectedCity, setSelectedCity,
			locationName, setLocationName,
		}}>
			{children}
		</SurveyContext.Provider>
	)
}

SurveyContext.displayName = "SurveyContext";