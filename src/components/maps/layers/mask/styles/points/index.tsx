export const getPointsStyle = ( id: string, source: string ) => {
  const layerStyle: any = {
    id,
    type: "circle",
    source,
    paint: {
      'circle-radius': 3,
      'circle-color': ['get', 'circle-color']
    }
  };
  return layerStyle
}