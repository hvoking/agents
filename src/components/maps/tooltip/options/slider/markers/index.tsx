// App imports
import './styles.scss';

export const Markers = ({ xScale, cy, r, minBound, maxBound }: any) => {
    const array = Array.from({ length: 11 }, (_, i) => i * (maxBound > 1 ? 1 : 0.1));
    
    return (
        <>
            {array.map((item: any) => {
                return (
                    <circle 
                        className="slider-markers"
                        cx={xScale(minBound + item)} 
                        cy={cy} 
                        r={r}
                    />
                )
            })}
        </>
    )
}

Markers.displayName="Markers";