export const providers = [
	{
		name: "streets",
		label: 'Streets', 
		provider: "overture", 
		layer: 'rotterdam_roads', 
		geometryType: "LineString", 
		columnName: "road_class", 
		graphicType: "dots"
	},
	{
		name: "buildings",
		label: 'Buildings', 
		provider: "overture", 
		layer: 'buildings-overture', 
		geometryType: "Polygon", 
		columnName: "subtype", 
		graphicType: "dots"
	},
	{
		name: "foursquare",
		label: 'Points of Interest', 
		provider: "foursquare", 
		layer: 'points-foursquare', 
		geometryType: "Point", 
		columnName: "category", 
		graphicType: "dots"
	},
	{
		name: "inside_airbnb",
		label: 'Properties', 
		provider: "inside_airbnb", 
		layer: 'points-airbnb', 
		geometryType: "Point", 
		columnName: "property_type", 
		graphicType: "gauge"
	},
]