// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Third-party imports
import { useLocation } from 'react-router-dom';

const LimitsDataContext: React.Context<any> = createContext(null)

export const useLimitsData = () => {
	return (
		useContext(LimitsDataContext)
	)
}

export const LimitsDataProvider = ({children}: any) => {
	const [ limitsData, setLimitsData ] = useState<any>(null);
	
	const location = useLocation();

	useEffect(() => {
		const fetchData = async () => {
			const url = `${process.env.REACT_APP_API_URL}/limits_api?schema=limits&table=world`;
			const res = await fetch(url);
			const receivedData = await res.json();
			setLimitsData(receivedData[0]);
		}
		location.pathname === '/responses' && fetchData();
	}, [ location.pathname ]);

	return (
		<LimitsDataContext.Provider value={{ limitsData }}>
			{children}
		</LimitsDataContext.Provider>
	)
}

LimitsDataContext.displayName = "LimitsDataContext";