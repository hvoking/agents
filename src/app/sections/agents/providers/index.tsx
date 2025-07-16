export const providersArray = [
	{
		name: "streets",
		provider: "mapbox", 
		source: 'composite',
		layer: 'road',
		columnName: "type",
		geometryType: "LineString",
	},
	{
		name: "buildings",
		provider: "overture", 
		source: 'buildings-overture',
		layer: 'buildings-overture', 
		geometryType: "Polygon", 
		columnName: "subtype", 
	},
	{
		name: "foursquare",
		provider: "foursquare", 
		source: 'points-foursquare',
		layer: 'points-foursquare', 
		geometryType: "Points", 
		columnName: "category", 
	},
	{
		name: "inside_airbnb",
		provider: "inside_airbnb", 
		source: 'points-airbnb',
		layer: 'points-airbnb', 
		geometryType: "Points", 
		columnName: "property_type", 
	},
]