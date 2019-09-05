import React, { useState } from 'react';
import './Components/List.css';
import { movies, characters } from './data'; // imports the data from the data.js file, using named imports (in this case the variables movies and characters) instead of default component import
import List from './Components/List';

function App(props) {
	// define a new State and store it a variable called showMovies, and initialize this to be true
	const [ showMovies, setShowMovies ] = useState(true);

	// const listItems = [];
	const handleShowMovies = () => {
		// initialise the showMovies variable to true, meaning when user clicks at the movies button only movies are going to be shown
		setShowMovies(true);
	};

	const handleShowCharacters = () => {
		// initialise the showMovies variable to false, meaning when user clicks at the movies button characters are not going to be shown
		setShowMovies(false);
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
				{/* the List component is now being rendered. The code statement of the prop named listItems is declared that it can have its state set to either movies or characters  */}
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
					// onClick event, the the handleShowCharacters function (defined above) becomes triggered, which will then follow on to go to the previous states above
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
