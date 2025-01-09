export const getPolygonStyle = ( layerId: any, sourceId: any ) => {
  const layerStyle: any = {
      id: layerId,
      type: "fill-extrusion",
      source: sourceId,
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