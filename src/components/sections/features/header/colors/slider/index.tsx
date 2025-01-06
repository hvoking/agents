// App imports
import { Wrapper } from './wrapper';
import { SVGWrapper } from './svg';
import { Background } from './background';
import { Foreground } from './foreground';
import './styles.scss';

// Context imports
import { useSlider } from 'context/slider';
import { useSliderSizes } from 'context/sizes/slider';

// Third-party imports
import * as d3 from 'd3';

export const Slider = ({ marker }: any) => {
  const { innerWidth, innerHeight } = useSliderSizes();
  const { radiusPosition, setRadiusPosition, minBound, maxBound, colorPalette } = useSlider();

  const xScale: any = d3.scaleLinear()
    .domain([ minBound, maxBound ])
    .range([ 0, innerWidth ]);

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
            marker={marker}
            xScale={xScale} 
            minBound={minBound}
            maxBound={maxBound}
            radiusPosition={radiusPosition} 
            height={innerHeight}
            palette={colorPalette}
          />
          <Wrapper
            xScale={xScale}
            innerWidth={innerWidth}
            innerHeight={innerHeight}
            setRadiusPosition={setRadiusPosition}
            minBound={minBound}
            maxBound={maxBound}
          />
        </SVGWrapper>
      </div>
    </div>
  )
}

Slider.displayName="Slider";