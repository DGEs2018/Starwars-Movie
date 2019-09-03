import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
	const [ listMovies, setListMovies ] = useState('');
	const [ listCharacters, setListCharacters ] = useState('');

	const movies = [ 'Starwars 1', 'Starwars 2', 'A New Hope' ];
	const showMovies = movies.map((movie) => <li>{movie}</li>);

	const handleShowMovies = (e) => setListMovies(showMovies);
	const handleShowCharacters = (e) => {
		setListCharacters('e.target.value');
	};

	// const listMovieRender = React.createClass;
	return (
		<div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
				<button
					style={{
						display: 'inline-block',
						width: '300px',
						height: '100px',
						backgroundColor: 'darkgrey',
						border: '1px solid black'
					}}
					onClick={handleShowMovies}
				>
					Movies
				</button>
				<ul value={listMovies}>
					<li>First Movie</li>
					<li>Second Movie</li>
					<li>Third Movie</li>
				</ul>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
				<button
					style={{
						display: 'inline-block',
						width: '300px',
						height: '100px',
						backgroundColor: 'grey',
						border: '1px solid darkgrey'
					}}
					onClick={handleShowCharacters}
				>
					Characters in the Movies
				</button>
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
