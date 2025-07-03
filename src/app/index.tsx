// App imports
import { Layout } from './layout';
import { Left } from './left';
import './styles.scss';

// Context imports
import { ContextProvider } from 'context';

export const App = () => {
  return (
    <ContextProvider>
      <div className="main-wrapper"> 
        <Left/>
        <Layout/>
      </div>
    </ContextProvider>
  );
};

App.displayName = "App";