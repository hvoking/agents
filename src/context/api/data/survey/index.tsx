// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Third-party imports
import { useLocation } from 'react-router-dom';

const SurveyDataContext: React.Context<any> = createContext(null)

export const useSurveyData = () => {
	return (
		useContext(SurveyDataContext)
	)
}

export const SurveyDataProvider = ({children}: any) => {
	const [ surveyData, setSurveyData ] = useState<any>(null);
	const location = useLocation();
	
	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	survey_api
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setSurveyData(receivedData);
	  }
	  location.pathname === '/responses' && fetchData();
	}, [ location.pathname ]);

	return (
		<SurveyDataContext.Provider value={{ surveyData }}>
			{children}
		</SurveyDataContext.Provider>
	)
}

SurveyDataContext.displayName = "SurveyDataContext";