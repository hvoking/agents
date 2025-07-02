// App imports
import { Left } from './left';
import { Sections } from './sections';
import { Location } from './location';
import { Cursor } from './cursor';
import './styles.scss';

export const Wrapper = ({ children }: any) => {
  return (
    <div className="main-wrapper"> 
      <Left/>
      <div className="map-wrapper">
        {children}
        <Sections/>
        <Location/>
        <Cursor/>
      </div>
    </div>
  );
};

Wrapper.displayName = "Wrapper";