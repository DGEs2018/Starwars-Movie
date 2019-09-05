import React, { useState } from 'react';
// import './App.css';
import './Components/List.css';
// import the data
import { movies, characters } from './data';
import List from './Components/List';
import ListItem from './Components/ListItem';

function App(props) {
	// define a new State and store it a variable called showMovies, and initialize this to be true
	const [ showMovies, setShowMovies ] = useState(true);

	// const listItems = [];
	const handleShowMovies = () => {
		// listItems.map((movie, i) => <li key={i}>{movie}</li>);
		setShowMovies(true);
		// !setShowMovies(false);
	};

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
					// onClick event the function handleShowMovies is triggered which then goes to line 14,
					//ctd. which returns the code on line 16 that then direct the state back to where the state was first initialized.
					onClick={handleShowMovies}
				>
					Movies
				</button>

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
