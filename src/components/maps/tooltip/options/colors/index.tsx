// React imports
import { useState, useEffect } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Wrapper } from './wrapper';
import './styles.scss';

// Context imports
import { useSliderSizes } from 'context/sizes/slider';
import { useMarkers } from 'context/agents/markers';

// Third-party imports
import * as d3 from 'd3';

export const Colors = ({ markerId }: any) => {
  const { innerWidth, innerHeight } = useSliderSizes();
  const { setMarkers } = useMarkers();

  const [ currentFillColor, setCurrentFillColor ] = useState("rgba(223, 246, 255, 1");

  const colorPalette = [
      "rgba(204, 255, 230, 1)",
      "rgba(255, 229, 204, 1)",
      "rgba(223, 246, 255, 1)",
      "rgba(255, 255, 204, 1)",
      "rgba(255, 204, 203, 1)",
  ];

  const range = 1 / (colorPalette.length - 1);

  const colorScale = d3.scaleLinear<string>()
    .domain(d3.range(0, 1 + range, range))
    .range(colorPalette);


  useEffect(() => {
    setMarkers((prev: any) => ({
        ...prev,
        [markerId]: {
            ...prev[markerId],
            color: currentFillColor,
        },
    }));
  }, [ currentFillColor ])

  return (
    <SVGWrapper>
      <Wrapper
        innerWidth={innerWidth}
        innerHeight={innerHeight}
        colorScale={colorScale}
        setCurrentFillColor={setCurrentFillColor}
      />
    </SVGWrapper>
  )
}

Colors.displayName="Colors";