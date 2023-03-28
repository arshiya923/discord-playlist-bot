import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import MainContent from './Components/MainContent/MainContent'
import Footer from './Components/Footer/Footer'

import './App.css'

const App = () => {
	return(
		<div>
			<Navbar />
			<MainContent />
			<Footer />
		</div>
	)
}

export default App