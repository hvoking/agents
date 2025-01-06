export const Background = ({ xScale, minBound, maxBound, height, palette }: any) => {
	const gradientId = "slider-gradient";
    
    const stops = palette.map((color: any, index: any) => (
        <stop
            key={index}
            offset={`${(index / (palette.length - 1)) * 100}%`}
            style={{ stopColor: color, stopOpacity: 0.4 }}
        />
    ));

	return (
		<>
			<defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    {stops}
                </linearGradient>
            </defs>
			<rect
				x={xScale(minBound)}
				y={height / 4}
				rx={height / 4}
				ry={height / 4}
				width={xScale(maxBound) - xScale(minBound)}
				height={height / 2}
				fill={`url(#${gradientId})`}
				stroke="rgba(97, 135, 218, 1)"
			/>
		</>
	)
}

Background.displayName="Background";