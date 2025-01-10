export const getLineStyle = ( layerId: any, sourceId: any ) => {
    const layerStyle: any = {
      id: layerId,
      type: "line",
      source: sourceId,
      paint: {
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          5, ['*', ['get', 'line-width'], 0.1],
          15, ['*', ['get', 'line-width'], 2]
        ],
        'line-color': ['get', 'line-color'],
      },
    };

    return layerStyle
}