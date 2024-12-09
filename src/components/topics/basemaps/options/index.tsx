export const listOfBaseMaps = [
	{
		"provider": "mapbox",
		"logo": "static/icones/provedores/mapas/mapbox.png",
		"mapas": {
			"Streets": "mapbox://styles/mapbox/streets-v11",
			"Outdoors": "mapbox://styles/mapbox/outdoors-v11",
			"Light": "mapbox://styles/mapbox/light-v10",
			"Dark": "mapbox://styles/mapbox/dark-v10",
			"Satellite": "mapbox://styles/mapbox/satellite-v9",
			"Satellite Streets": "mapbox://styles/mapbox/satellite-streets-v11",
			"Navigation Day": "mapbox://styles/mapbox/navigation-day-v1",
			"Navigation Night": "mapbox://styles/mapbox/navigation-night-v1" ///bugs in this base map
		}
	}, 
	{
		"provider": "carto",
		"logo": "static/icones/provedores/mapas/cartodb.png", 
		"mapas": {
			"Dark Matter With Labels": "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
			"Dark Matter Without Labels": "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
			"Positron With Labels": "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
			"Positron Without Labels": "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
			"Voyager With Labels": "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
			"Voyager Without Labels": "https://basemaps.cartocdn.com/gl/voyager-nolabels-gl-style/style.json"
		}
	},
]