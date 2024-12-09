// App imports
import { Logo } from './logo';
import { Left } from './left';
import './styles.scss';

export const Sidebar = () => {
  return (
      <div className="sidebar-left">
        <Logo/>
        <Left/>
      </div>
  )
}

Sidebar.displayName="Sidebar";