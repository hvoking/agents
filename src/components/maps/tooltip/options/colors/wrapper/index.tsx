// React imports
import { useState } from 'react';

export const Wrapper = ({ innerWidth, innerHeight, colorScale, setCurrentFillColor }: any) => {
    const [selectedIndex, setSelectedIndex] = useState<any>(null);

    const numOptions = 16;
    const rows = 4;
    const cols = 4;
    const rectWidth = innerWidth / cols;
    const rectHeight = innerHeight / rows;

    const onRectangleClick = (index: number) => {
        setSelectedIndex(index);
        const colorValue = index / (numOptions - 1); // Normalize index to [0, 1]
        const fillColor = colorScale(colorValue);
        setCurrentFillColor(fillColor);
    };

    return (
        <>
            {Array.from({ length: numOptions }, (_, index) => {
                const row = Math.floor(index / cols);
                const col = index % cols;
                const x = col * rectWidth;
                const y = row * rectHeight;

                return (
                    <rect
                        key={index}
                        x={x}
                        y={y}
                        width={rectWidth}
                        height={rectHeight}
                        fill={selectedIndex === index ? 'black' : colorScale(index / (numOptions - 1))}
                        stroke="white"
                        onClick={() => onRectangleClick(index)}
                        style={{
                            cursor: 'pointer',
                            transition: 'fill 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                    />
                );
            })}
        </>
    );
};

Wrapper.displayName = 'Wrapper';