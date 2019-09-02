import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
	const [ listMovies, setListMovies ] = useState('');
	const [ listCharacters, setListCharacters ] = useState('');

	const handleShowMovies = (e) => {
		setListMovies('e.target.value');
	};
	const handleShowCharacters = (e) => {
		setListCharacters('e.target.value');
	};
	return (
		<div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
				<div
					style={{
						display: 'inline-block',
						width: '300px',
						height: '100px',
						backgroundColor: 'blue',
						border: '1px solid darkgrey'
					}}
				/>
				<button onClick={handleShowMovies}>Movies</button>

				<ul value={listMovies}>
					<li>First Movie</li>
					<li>Second Movie</li>
					<li>Third Movie</li>
				</ul>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
				<div
					style={{
						display: 'inline-block',
						width: '300px',
						height: '100px',
						backgroundColor: 'purple',
						border: '1px solid darkgrey'
					}}
				/>
				<button onClick={handleShowCharacters}>Characters in the Movies</button>
				<ul value={listCharacters}>
					<li>Character one</li>
					<li>Character two</li>
					<li>Character three</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
