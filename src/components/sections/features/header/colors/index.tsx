// React imports
import { useState } from 'react';

// App imports
import { Slider } from './slider'
import './styles.scss';

export const Colors = ({ marker }: any) => {
	const [ activeColors, setActiveColors ] = useState(false);

	const onClick = () => setActiveColors((prev: boolean) => !prev)

	return (
		<>
			<img 
				src={process.env.PUBLIC_URL + "/static/icons/colors.svg"} 
				alt="colors" 
				height={21} 
				style={{paddingTop: "2px"}}
				onClick={onClick}
			/>
			{activeColors && <div className="colors-slider-wrapper">
				<Slider marker={marker}/>
			</div>}
		</>
	)
}

Colors.displayName="Colors";