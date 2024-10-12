// Routes
import { Maps } from '../components/main/maps';
import { Responses } from '../components/main/responses';
import { Results } from '../components/main/results';

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