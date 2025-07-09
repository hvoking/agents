export const getLinesStyle = ( id: any, source: any ) => {
  const layerStyle: any = {
    id,
    type: "line",
    source,
    paint: {
      'line-width': [
        'interpolate',
        ['linear'],
        ['zoom'],
        13, ['*', ['get', 'line-width'], 1],
        16, ['*', ['get', 'line-width'], 2]
      ],
      'line-color': ['get', 'line-color'],
    },
  };
  return layerStyle
}