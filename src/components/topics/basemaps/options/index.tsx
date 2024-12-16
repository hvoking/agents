export const listOfBaseMaps = [
	{
		"provider": "mapbox",
		"mapas": {
			"Streets": "mapbox://styles/mapbox/streets-v11",
			"Light": "mapbox://styles/mapbox/light-v10",
			"Dark": "mapbox://styles/mapbox/dark-v10",
			"Satellite": "mapbox://styles/mapbox/satellite-v9",
			"Satellite Streets": "mapbox://styles/mapbox/satellite-streets-v11",
			"Navigation Night": "mapbox://styles/mapbox/navigation-night-v1" ///bugs in this base map
		}
	}, 
	{
		"provider": "carto",
		"mapas": {
			"Dark Matter With Labels": "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
			"Positron With Labels": "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
			"Voyager With Labels": "https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json",
		}
	},
	{
		"provider": "custom",
		"mapas": {
			"color": "mapbox://styles/hvoking/cm1h7n1kp01ed01pd24g689ob",
			"dark": "mapbox://styles/hvoking/clrwzn1jo015q01nl53664m2c",
			"light": "mapbox://styles/hvoking/cm16kxow500ez01pc3psqc4pv",
		}
	},
]