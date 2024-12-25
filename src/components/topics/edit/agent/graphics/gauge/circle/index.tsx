export const Circle = ({ cx, cy, innerRadius, strokeWidth, currentCircunference, circumference,	totalCircunference,	stroke }: any) => {
	const strokeDasharray = `${currentCircunference} ${circumference - currentCircunference}`;
	const strokeDashoffset = -(totalCircunference - currentCircunference);
	
	return (
		<circle
			cx={cx}
			cy={cy}
			fill="none"
			r={innerRadius}
			stroke={stroke}
			strokeWidth= {strokeWidth}
			strokeDasharray={strokeDasharray}
			strokeDashoffset={strokeDashoffset}
		/>
	)
}

Circle.displayName="Circle";