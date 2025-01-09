// React imports
import { useState } from 'react';

// App imports
import { CircleProperties } from '../circle';
import { IsoProperties } from '../iso';
import './styles.scss';

// Context imports
import { useMask } from 'context/agents/mask';

export const Boundary = ({ marker }: any) => {
	const { markerGeometryType, setMarkerGeometryType } = useMask();
	const isIsoActive = markerGeometryType[marker.id] === "iso"

	const setCurrentBoundary = (currentType: any) => {
		setMarkerGeometryType((prev: any) => ({ ...prev, [marker.id]: currentType }))
	}

	return (
		<div className="boundary-selector">
		  <h2>Select Boundary Type</h2>
		  <div className="boundary-options">
		    <div className="agent-grid-card" onClick={() => setCurrentBoundary("circle")}>
		      <img 
		      	src={process.env.PUBLIC_URL + "/static/icons/circle.svg"} 
		      	alt="iso-icon"
		      	className="boundary-icon"
		      />
		      <span>Circle</span>
		    </div>
		    <div className="agent-grid-card" onClick={() => setCurrentBoundary("iso")}>
		      <img 
		      	src={process.env.PUBLIC_URL + "/static/icons/iso.svg"} 
		      	alt="iso-icon"
		      	className="boundary-icon"
		      />
		      <span>Isochrone</span>
		    </div>
		  </div>
		  <div className="boundary-selector-wrapper">
		  	{!isIsoActive && <CircleProperties marker={marker}/>}
		  	{isIsoActive && <IsoProperties marker={marker}/>}
		  </div>
		</div>
	)
}

Boundary.displayName="Boundary";