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