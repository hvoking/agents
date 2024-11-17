// Routes
import { Maps } from 'components/maps';
import { Responses } from 'components/responses';
import { Results } from 'components/results';

// Third party imports
import { Routes, Route } from 'react-router-dom';

export const AtlasRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Maps/>}/>
			<Route path='/responses' element={<Responses/>}/>
			<Route path='/results' element={<Results/>}/>
		</Routes>
	)
}

AtlasRouter.displayName="AtlasRouter"