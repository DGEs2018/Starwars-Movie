import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
	// console.log(props);
	// console.log(props.listItems);
	return (
		// create a ul
		<ul>
			{props.listItems.map((element, i) => <ListItem key={i} element={element} />)}
			{/* <div>hello{props.listItems}</div> */}
			{}
		</ul>
		// inside the ul loop over movies from props

		// <div>
		// 	<div movies={movies}>{props.movies.value}</div>
		// 	<div characters={characters}>{props.characters.value}</div>
		// </div>
	);
};

export default List;
