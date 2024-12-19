// Context imports
import { useMask } from 'context/agents/mask';

// Third-party imports
import { Source, Layer } from 'react-map-gl';

export const Lines = ({ marker, layer, index }: any) => {
	const { getLines } = useMask();

  const { longitude, latitude } = marker;
  const center = [longitude, latitude];
  const maskProperties = getLines(center, layer);

  const sourceId = `lines-source-${index}`;
  const layerId = `lines-layer-${index}`;

  if (!maskProperties || maskProperties.length === 0) return <></>;

	const layerStyle: any = {
    id: layerId,
    type: "line",
    source: sourceId,
    paint: {
      'line-width': 2,
      'line-color': ['get', 'line-color'],
    },
	};

	return (
		<Source 
		  id={sourceId} 
		  type="geojson" 
		  data={maskProperties}
		>
		  <Layer {...layerStyle} />
		</Source>
	)
}

Lines.displayName="Lines";