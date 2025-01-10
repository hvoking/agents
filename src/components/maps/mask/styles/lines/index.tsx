export const getLinesStyle = ( layerId: any, sourceId: any ) => {
    const layerStyle: any = {
      id: layerId,
      type: "line",
      source: sourceId,
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