// App imports
import { StrokeOpacity } from './stroke/strokeOpacity';
import { StrokeColor } from './stroke/strokeColor';
import { StrokeWidth } from './stroke/strokeWidth';
import { FillOpacity } from './fill/fillOpacity';
import { FillColor } from './fill/fillColor';
import './styles.scss';

export const Colors = ({ markerId, activeFeature }: any) => {
  return (
    <div>
      {activeFeature === "fill" && <div>
        <FillOpacity markerId={markerId}/>
        <FillColor markerId={markerId}/>
      </div>}
      {activeFeature === "stroke" && <div>
        <StrokeOpacity markerId={markerId}/>
        <StrokeWidth markerId={markerId}/>
        <StrokeColor markerId={markerId}/>
      </div>}

    </div>
  )
}

Colors.displayName="Colors";