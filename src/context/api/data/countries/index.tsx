// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Third-party imports
import { useLocation } from 'react-router-dom';

const CountriesDataContext: React.Context<any> = createContext(null)

export const useCountriesData = () => {
	return (
		useContext(CountriesDataContext)
	)
}

export const CountriesDataProvider = ({children}: any) => {
	const [ countriesData, setCountriesData ] = useState<any>(null);
	
	const location = useLocation();

	useEffect(() => {
		const fetchData = async () => {
			const url = `${process.env.REACT_APP_API_URL}/countries_api?schema=limits&table=countries`;
			const res = await fetch(url);
			const receivedData = await res.json();
			setCountriesData(receivedData);
		}
		location.pathname === '/responses' && fetchData();
	}, [ location.pathname ]);

	return (
		<CountriesDataContext.Provider value={{ countriesData }}>
			{children}
		</CountriesDataContext.Provider>
	)
}

CountriesDataContext.displayName = "CountriesDataContext";