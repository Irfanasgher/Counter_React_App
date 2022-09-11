import React from 'react';

// Stateless Functional Component

const NavBar = ({ totalCounters }) => {
	console.log('Navbar - Rendered');
	return (
		<nav className='navbar navbar-light bg-light'>
			<a className='navbar-brand' href='#'>
				Navbar <span className='badge badg-pill badge-secondary'>{totalCounters}</span>
			</a>
		</nav>
	);
};
export default NavBar;
