// React imports
import { useState } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Background } from './background';
import { Foreground } from './foreground';
import { Handler } from './handler';
import { Legend } from './legend';
import { Wrapper } from './wrapper';
import './styles.scss';

// Context imports
import { useRadiusSizes } from 'context/sizes/radius';

// Third-party imports
import * as d3 from 'd3';

export const Slider = ({ markerId }: any) => {
  const [ radiusPosition, setRadiusPosition ] = useState(10);

  const minBound = 5;
  const maxBound = 15;

  const { innerWidth, innerHeight } = useRadiusSizes();

  const circleHeight = innerHeight / 6;
  const offset = 10;

  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ offset, innerWidth - offset ]);

  return (
    <div className="iso-slider">
    <SVGWrapper>
      <Background
        xScale={xScale} 
        minBound={minBound} 
        maxBound={maxBound} 
        circleRadius={circleHeight}
      />
      <Foreground
        xScale={xScale} 
        minBound={minBound}
        radiusPosition={radiusPosition} 
        circleRadius={circleHeight}
      />
      <Handler
        cx={xScale(radiusPosition)} 
        cy={circleHeight} 
        r={circleHeight}
      />
      <Legend 
        xScale={xScale} 
        circleRadius={circleHeight} 
        currentPosition={radiusPosition}
      />
      <Wrapper
        xScale={xScale}
        innerWidth={innerWidth}
        innerHeight={innerHeight}
        setRadiusPosition={setRadiusPosition}
        markerId={markerId}
        minBound={minBound}
        maxBound={maxBound}
      />
    </SVGWrapper>
    </div>
  )
}

Slider.displayName="Slider";