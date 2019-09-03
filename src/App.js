import React, { useState } from 'react';
import './App.css';
// import the data
import { movies, characters } from './data';
import List from './Components/List';

function App() {
	const [ listCharacters, setListCharacters ] = useState('');
	const [ listMovies, setListMovies ] = useState(false);

	/* const showMovies = [ 'Starwars 1', 'Starwars 2', 'A New Hope' ];
	const showCharacters = [ 'Luke Skywalker', 'C3PO', 'R2D2' ]; */
	// const showMovies = movies.map((movie) => <li>{movie}</li>);

	const handleShowMovies = () => {
		// setListMovies(!listMovies); this toggles between on and off as an accordion
		setListMovies(true);
		setListCharacters(false);
	};

	// console.log(handleShowMovies);

	// const handleShowMovies = (e) => setListMovies(showMovies);
	const handleShowCharacters = () => {
		setListCharacters(true);
		setListMovies(false);
	};

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
				{/* 	{listMovies === true ? (
					<ul>
						<li>Starwars 1</li>
						<li>Starwars 2</li>
						<li>A New Hope</li>
					</ul>
				) : null} */}
				<List listItems={movies} onClick={handleShowMovies} />
				{/* {listMovies === true ? { movies } : null} */}
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
				<List listItems={characters} onClick={handleShowCharacters} />
				{listCharacters === true ? (
					<ul>
						<li>Skywalker</li>
						<li>C3PO</li>
						<li>R2D2</li>
					</ul>
				) : null}
			</div>
		</div>
	);
}

export default App;
