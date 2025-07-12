// App imports
import { Panel } from './panel';
import { Canvas } from './canvas';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  return (
    <ContextProvider>
      <div className="main-wrapper"> 
        <Canvas/>
        <Panel/>
      </div>
    </ContextProvider>
  );
};

App.displayName = "App";