import './styles.scss';

export const Arrow = ({ onClick }: any) => {

	return (
		<>
			<div className="dropdown-arrow" onClick={onClick}/>
		</>
	)
}

Arrow.displayName="Arrow";