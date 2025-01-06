export const providers = {
	"streets": [
		{
			provider: "overture", 
			layer: 'rotterdam_roads', 
			label: 'Streets', 
			type: "LineString", 
			columnName: "road_class", 
			graphicType: "dots"
		},
	],
	"buildings": [
		{
			provider: "overture", 
			layer: 'buildings-overture', 
			label: 'Buildings', 
			type: "Polygon", 
			columnName: "subtype", 
			graphicType: "dots"
		},
	],
	"foursquare": [
		{
			provider: "foursquare", 
			layer: 'points-foursquare', 
			label: 'Points of Interest', 
			type: "Point", 
			columnName: "category", 
			graphicType: "dots"
		},
	],
	"inside_airbnb": [
		{
			provider: "inside_airbnb", 
			layer: 'points-airbnb', 
			label: 'Properties', 
			type: "Point", 
			columnName: "property_type", 
			graphicType: "gauge"
		},
	],
}