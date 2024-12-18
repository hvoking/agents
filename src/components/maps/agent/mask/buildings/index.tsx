import { useState, useEffect } from 'react';

// Context imports
import { useTiles } from 'context/tiles';
import { useStylesApi } from 'context/api/styles';
import { useGeo } from 'context/geo';

// Third party imports
import { Source, Layer } from 'react-map-gl';

const tableSchema = "agents";
const tableName = "rotterdam_buildings";

export const Buildings = () => {
	const { fetchTiles } = useTiles();
	const { fetchData } = useStylesApi();
	const { viewport } = useGeo();

	const [ styleData, setStyleData ] = useState<any[]>([]);
	const [ tilesData, setTilesData ] = useState<any>(null);

    useEffect(() => {
    	const loadData = async () => {
			const data = await fetchData('', tableName);
			setStyleData(data);
		}
		loadData();
	}, []);

	useEffect(() => {
    	const loadData = async () => {
			const tiles = await fetchTiles(tableSchema, tableName);
			setTilesData(tiles);
		}
		loadData();
	}, [ viewport ]);

	const transformStyles = (styles: any) => {
		return styles.map((style: any) => {
			const { "source-layer": sourceLayer, source, ...rest } = style;

			return {
				...rest,
				source: "vector-tiles"
			};
		});
	}
	const updatedStyles = transformStyles(styleData);

	const layers = updatedStyles.map((style: any, index: number) => {
		return (
			<Layer key={index} {...style}/>
		)
	});

	return (
		<Source
			id="vector-tiles"
			type="geojson"
			data={tilesData}
		>
			{layers}
		</Source>
	)
}

Buildings.displayName="Buildings"