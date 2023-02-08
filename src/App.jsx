import { useState } from 'react'
import React from 'react'

function App() {

	//TODO Char constructor

  return (
	<div className="App">
		<div className="Menu-container">
			{/* Menu component */}
		</div>
		<div className="main-container">
			<div className="main-column-left">
				//TODO Character traits component
				//TODO Feats component
				//TODO Combine traits / feats into Build component
				{/* Build component*/}
			</div>
			<div className="main-column-right">
				<div className="main-right-upper">
					<div className="Stats-container">
						{/* Stats component*/}
					</div>
					<div className="Conditions-container">
						{/* Conditions component */}
					</div>
				</div>
				<div className="main-right-lower">
					<div className="Skills-container">
						{/* Skills component */}
					</div>
					<div className="Inventory-container">
						{/* Inventory component */}
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default App
