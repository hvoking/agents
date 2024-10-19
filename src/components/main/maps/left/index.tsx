// App imports
import { AddPin } from './add';
import { Trash } from './trash'
import { Save } from './save';
import './styles.scss';

export const Left = () => {
  return (
    <div className="topics-wrapper">
      <AddPin/>
      <Trash/>
      <Save/>
    </div>
  )
}

Left.displayName="Left";