export const getPointStyle = ( layerId: string, sourceId: string ) => {
  const layerStyle: any = {
      id: layerId,
      type: "circle",
      source: sourceId,
      paint: {
        'circle-radius': 3,
        'circle-color': ['get', 'circle-color']
      }
    };

  return layerStyle
}

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

export const getLineStyle = ( layerId: any, sourceId: any ) => {
    const layerStyle: any = {
      id: layerId,
      type: "line",
      source: sourceId,
      paint: {
        'line-width': ['get', 'line-width'],
        'line-color': ['get', 'line-color'],
      },
    };

    return layerStyle
}