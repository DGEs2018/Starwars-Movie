import React, { useState } from 'react';
// import './App.css';
import './Components/List.css';
// import the data
import { movies, characters } from './data';
import List from './Components/List';
import ListItem from './Components/ListItem';
// import ListItem from './Components/ListItem';

function App(props) {
	// const [ listCharacters, setListCharacters ] = useState(false);
	const [ showMovies, setShowMovies ] = useState(true);

	/* const showMovies = [ 'Starwars 1', 'Starwars 2', 'A New Hope' ];
	const showCharacters = [ 'Luke Skywalker', 'C3PO', 'R2D2' ]; */
	// const showMovies = movies.map((movie) => <li>{movie}</li>);

	/* const handleShowMovies = () => {
		// setListMovies(!listMovies); this toggles between on and off as an accordion
		setListMovies(true);
		// setListCharacters(false);
	}; */

	// const listItems = [];
	const handleShowMovies = () => {
		// listItems.map((movie, i) => <li key={i}>{movie}</li>);
		setShowMovies(true);
		// !setShowMovies(false);
	};

	// console.log(handleMovies);
	// console.log(handleShowMovies);

	// const handleShowMovies = (e) => setListMovies(showMovies);
	const handleShowCharacters = () => {
		setShowMovies(false);
		// setListMovies(false);
	};

	return (
		<div className="App" style={{ display: 'flex', flexDirection: 'row' }}>
			<div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
				<button
					style={{
						display: 'inline-block',
						width: '300px',
						height: '100px',
						backgroundColor: 'skyblue',
						border: '1px solid black'
					}}
					onClick={handleShowMovies}
					// onClick={handleMovies}
				>
					Movies
				</button>
				{/* listMovies === true ? (
					<ul>
						<li>Starwars 1</li>
						<li>Starwars 2</li>
						<li>A New Hope</li>
					</ul>
				) : null */}
				{/* {showMovies ? <List listItems={movies} /> : <List listItems={characters} />} */}
				{/* if the user clicks on showMovies then the list of movies should be shown, else the list of characters */}
				{/* {showMovies ? <ListItem movieProp={movieProp} /> : <ListItem characterProp={characterProp}>} */}
				{/* {showMovies ? { ListItem } : null} */}
				{/* <ListItem value={value} /> */}

				<List listItems={showMovies ? movies : characters} />
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', marginTop: '50px' }}>
				<button
					style={{
						display: 'inline-block',
						width: '300px',
						height: '100px',
						backgroundColor: 'turquoise',
						border: '1px solid darkgrey'
					}}
					onClick={handleShowCharacters}
				>
					Characters in the Movies
				</button>
				{/* {listCharacters ? <List listItems={characters} /> : null} */}

				{/* listCharacters === true ? (
					<ul>
						<li>Skywalker</li>
						<li>C3PO</li>
						<li>R2D2</li>
					</ul>
				) : null */}
			</div>
		</div>
	);
}

export default App;
