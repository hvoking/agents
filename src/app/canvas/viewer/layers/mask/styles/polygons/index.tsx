export const getPolygonsStyle = ( id: any, source: any ) => {
  const layerStyle: any = {
    id,
    type: "fill-extrusion",
    source,
    paint: {
      "fill-extrusion-color": ["get", "fill-color"],
      'fill-extrusion-height': [
        'coalesce',
        ['get', 'height'],
        10
      ],
      'fill-extrusion-base': 0,
      "fill-extrusion-vertical-gradient": true,
      "fill-extrusion-opacity": 0.6,
    },
  };
  return layerStyle
}