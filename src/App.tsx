// App imports
import { AtlasRouter } from './routes';
import { MainProvider } from './components/context';
import './styles.scss';

// Third-party imports
import { HashRouter as Router } from 'react-router-dom';

export const App = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
  
  return (
    <div className="App">
      <Router>
        <MainProvider>
          <AtlasRouter/>
        </MainProvider>
      </Router>
    </div>
  );
}