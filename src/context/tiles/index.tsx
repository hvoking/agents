// React imports
import { useState, useEffect, useContext, createContext } from 'react';

// App imports
import { mvtToGeoJSON, lonLatToTile } from './toGeojson';

// Context imports
import { useStylesApi } from 'context/api/styles';
import { useGeo } from 'context/geo';

const TilesContext: React.Context<any> = createContext(null)

export const useTiles = () => {
	return (
		useContext(TilesContext)
	)
}

export const TilesProvider = ({children}: any) => {
	const { getTilesSectionUrl } = useStylesApi();
	const { viewport } = useGeo();
	const { zoom, longitude, latitude } = viewport;
	const floorZoom = Math.floor(zoom);

	const { xTile, yTile } = lonLatToTile(longitude, latitude, floorZoom)

	const fetchTiles = async (tableSchema: any, tableName: any) => {
		const url = getTilesSectionUrl(tableSchema, tableName, xTile, yTile, floorZoom);
		const response = await fetch(url);
		const arrayBuffer = await response.arrayBuffer();
		const geojsonData = mvtToGeoJSON(arrayBuffer, xTile, yTile, floorZoom);
		return geojsonData;
	}

	return (
		<TilesContext.Provider value={{ fetchTiles }}>
			{children}
		</TilesContext.Provider>
	)
}

TilesContext.displayName = "TilesContext";