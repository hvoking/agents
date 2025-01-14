// React imports
import { useState } from 'react';

// App imports
import { SVGWrapper } from './svg';
import { Background } from './background';
import { Foreground } from './foreground';
import { Handler } from './handler';
import { Legend } from './legend';
import { Wrapper } from './wrapper';
import { Markers } from './markers';
import './styles.scss';

// Context imports
import { useRadiusSizes } from 'context/sizes/radius';

// Third-party imports
import * as d3 from 'd3';

export const Slider = ({ markerId, minBound, maxBound, markerProperty, title }: any) => {
  const middle = maxBound - ((maxBound - minBound) / 2);

  const [ handlerPosition, setHandlerPosition ] = useState(middle);
  const [ activeForeground, setActiveForeground ] = useState(false);

  const { innerWidth, innerHeight } = useRadiusSizes();
  
  const circleHeight = 10;
  const offset = 10;

  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ offset, innerWidth - offset ]);

  return (
    <div className="circle-slider">
      <SVGWrapper>
        <Background
          xScale={xScale} 
          minBound={minBound} 
          maxBound={maxBound} 
          circleHeight={circleHeight}
        />
        <Foreground
          xScale={xScale} 
          minBound={minBound}
          handlerPosition={handlerPosition} 
          circleRadius={circleHeight}
          activeForeground={activeForeground}
        />
        <Markers
          xScale={xScale} 
          cy={circleHeight} 
          r={4}
          minBound={minBound}
          maxBound={maxBound}
        />
        <Handler
          cx={xScale(handlerPosition)} 
          cy={circleHeight} 
          r={circleHeight}
        />
        <Legend 
          circleRadius={circleHeight} 
          currentPosition={handlerPosition}
          innerWidth={innerWidth}
          title={title}
        />
        <Wrapper
          handlerPosition={handlerPosition}
          xScale={xScale}
          innerWidth={innerWidth}
          innerHeight={innerHeight}
          setHandlerPosition={setHandlerPosition}
          minBound={minBound}
          maxBound={maxBound}
          setActiveForeground={setActiveForeground}
          markerId={markerId}
          markerProperty={markerProperty}
        />
      </SVGWrapper>
    </div>
  )
}

Slider.displayName="Slider";