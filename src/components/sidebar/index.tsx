// App imports
import { Logo } from './logo';
import { Left } from './left';
import { Right } from './right';
import './styles.scss';

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <Logo/>
      <div className="sidebar-items-wrapper">
        <Left/>
        <Right/>
      </div>
    </div>
  )
}

Sidebar.displayName="Sidebar";