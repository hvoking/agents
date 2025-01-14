// App imports
import './styles.scss';

export const Handler = ({ cx, cy, r }: any) => {
    return (
        <circle 
            className="slider-handler" 
            cx={cx} 
            cy={r} 
            r={r - 1}
        />
    )
}

Handler.displayName="Handler";