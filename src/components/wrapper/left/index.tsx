// App imports
import { AddPin } from './add';
import { Trash } from './trash'
import './styles.scss';

export const Left = () => {
  return (
    <div className="topics-wrapper">
      <AddPin/>
      <Trash/>
    </div>
  )
}

Left.displayName="Left";