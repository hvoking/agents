// React imports
import { useState } from 'react';

// App imports
import { Wrapper } from './wrapper';
import { SVGWrapper } from './svg';
import { Background } from './background';
import { Foreground } from './foreground';
import './styles.scss';

// Context imports
import { useSliderSizes } from 'context/sizes/slider';

// Third-party imports
import * as d3 from 'd3';

export const Slider = ({ markerId }: any) => {
  const { innerWidth, innerHeight } = useSliderSizes();

  const [ radiusPosition, setRadiusPosition ] = useState(0.5);
  const [ currentFillColor, setCurrentFillColor ] = useState("rgba(223, 246, 255, 1");

  const minBound = 0;
  const maxBound = 1;

  const colorPalette = [
      "rgba(204, 255, 230, 1)",
      "rgba(255, 229, 204, 1)",
      "rgba(223, 246, 255, 1)",
      "rgba(255, 255, 204, 1)",
      "rgba(255, 204, 203, 1)",
  ];


  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ 0, innerWidth ]);

  const range = 1 / (colorPalette.length - 1);

  const colorScale = d3.scaleLinear<string>()
    .domain(d3.range(0, 1 + range, range))
    .range(colorPalette);

  return (
    <div className="slider-wrapper-wrapper">
      <div className="rank-wrapper">
        Agent Color
      </div>
      <div className="slider-wrapper">
        <SVGWrapper>
          <Background
            xScale={xScale} 
            minBound={minBound} 
            maxBound={maxBound} 
            height={innerHeight}
            palette={colorPalette}
          />
          <Foreground
            markerId={markerId}
            xScale={xScale} 
            minBound={minBound}
            maxBound={maxBound}
            radiusPosition={radiusPosition} 
            height={innerHeight}
            colorScale={colorScale}
            currentFillColor={currentFillColor}
          />
          <Wrapper
            xScale={xScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            setRadiusPosition={setRadiusPosition}
            minBound={minBound}
            maxBound={maxBound}
            colorScale={colorScale}
            setCurrentFillColor={setCurrentFillColor}
          />
        </SVGWrapper>
      </div>
    </div>
  )
}

Slider.displayName="Slider";