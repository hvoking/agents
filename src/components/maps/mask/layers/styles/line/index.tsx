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