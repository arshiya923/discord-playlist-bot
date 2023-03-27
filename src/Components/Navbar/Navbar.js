import React from 'react'

import './Navbar.css'

const Navbar = () => {
	return(
		<div id='navbar'>
			<div id='logo'>
				<img src='logo.jpg'/>
			</div>
			<div id='navbar-items'>
				<ul>
					<li>Home</li>
					<li>Create New Playlist</li>
					<li>Sign In With Discord</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar