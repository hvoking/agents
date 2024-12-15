// React imports
import { useState, useEffect } from 'react';

// Context imports
import { useStylesApi } from 'context/api/styles';

// Third party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = () => {
	const { fetchData, getTilesUrl } = useStylesApi();
	const [ styleData, setStyleData ] = useState<any[]>([]);

	const schemaName = "agents";
	const tableName = "rotterdam_roads";
	
  	useEffect(() => {
    	const loadData = async () => {
			const data = await fetchData(schemaName, tableName);
			setStyleData(data);
		}
		loadData();
	}, []);

	const url = getTilesUrl(schemaName, tableName)

  	const layers = styleData.map((style: any, index: number) => {
  		style.paint['line-opacity'] = 0;
		return (
			<Layer key={index} {...style}/>
		)
	});

	return (
		<Source 
			id={tableName}
			type="vector" 
			tiles={[ url ]}
		>
			{layers}
		</Source>
	)
}

Lines.displayName="Lines"