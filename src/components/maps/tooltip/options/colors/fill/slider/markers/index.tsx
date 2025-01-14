// App imports
import './styles.scss';

export const Markers = ({ xScale, cy, r }: any) => {
    const array = Array.from({ length: 11 }, (_, i) => i * 0.1);
    
    return (
        <>
            {array.map((item: any) => {
                return (
                    <circle 
                        className="slider-markers"
                        cx={xScale(item)} 
                        cy={cy} 
                        r={r}
                    />
                )
            })}
        </>
    )
}

Markers.displayName="Markers";