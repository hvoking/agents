export const Handler = ({ cx, cy, r }: any) => {
    return (
        <circle 
          cx={cx} 
          cy={r} 
          r={r - 1}
          className="slider-handler"
        />
    )
}

Handler.displayName="Handler";