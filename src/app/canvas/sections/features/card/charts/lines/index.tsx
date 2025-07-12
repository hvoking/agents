// React imports
import { useMemo } from 'react';

// App imports
import { SVGWrapper } from './svg';

// Context imports
import { useLinesSizes } from 'context/sizes/lines';

export const Lines = ({ distribution, colors, sumOfValues }: any) => {
    const { innerWidth, innerHeight } = useLinesSizes();

    const numOfColumns = 30;
    const numOfRows = 30;

    const dotWidth = innerWidth / numOfColumns;
    const dotHeight = innerHeight / numOfRows;

    const dotsData = useMemo(() => {
        const positions: { cx: number; cy: number; color: string }[] = [];
        let currentRow = 0;
        let currentCol = 0;

        Object.entries(distribution).forEach(([item, value]: any) => {
            const count = Math.round((value / sumOfValues) * numOfColumns * numOfRows);

            Array.from({ length: count }).forEach(() => {
                const cx = currentCol * dotWidth;
                const cy = currentRow * dotHeight + dotHeight / 2;
                positions.push({ cx, cy, color: colors[item] });

                currentCol++;
                if (currentCol >= numOfColumns) {
                    currentCol = 0;
                    currentRow++;
                }
            });
        });

        return positions;
    }, [ distribution, colors, sumOfValues, dotWidth, dotHeight, numOfColumns ]);

	return (
		<SVGWrapper>
			{dotsData.map(({ cx, cy, color }: any, index: any) => (
                <line
                    key={index}
                    x1={cx + 0.5}
                    y1={cy}
                    x2={cx + dotWidth - 1}
                    y2={cy}
                    strokeWidth={10}
                    stroke={color}
                />
            ))}
		</SVGWrapper>
	)
}

Lines.displayName="Lines";