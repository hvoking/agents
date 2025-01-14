// App imports
import { Fill } from './fill';
import { Stroke } from './stroke';

import './styles.scss';

export const Colors = ({ markerId, activeFeature }: any) => {
  return (
    <div>
      {activeFeature === "fill" && <Fill markerId={markerId}/>}
      {activeFeature === "stroke" && <Stroke markerId={markerId}/>}

    </div>
  )
}

Colors.displayName="Colors";