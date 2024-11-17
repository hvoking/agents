// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// Third-party imports
import { useLocation } from 'react-router-dom';

const PinsDataContext: React.Context<any> = createContext(null)

export const usePinsData = () => {
	return (
		useContext(PinsDataContext)
	)
}

export const PinsDataProvider = ({children}: any) => {
	const [ pinsData, setPinsData ] = useState<any>(null);
	const location = useLocation();

	useEffect(() => {
	  const fetchData = async () => {
	  	const tempUrl = `
	    	${process.env.REACT_APP_API_URL}/
	    	pins_api
	    `
	  	const url = tempUrl.replace(/\s/g, '');
	    const res = await fetch(url);
	    const receivedData = await res.json();
	    setPinsData(receivedData);
	  }
	  (location.pathname === '/results' || location.pathname === '/responses') && fetchData();
	}, [ location.pathname ]);

	return (
		<PinsDataContext.Provider value={{ pinsData }}>
			{children}
		</PinsDataContext.Provider>
	)
}

PinsDataContext.displayName = "PinsDataContext";