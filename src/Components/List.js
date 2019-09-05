import React from 'react';
import ListItem from './ListItem'; // import the newly created ListItem component that we will call below

const List = (props) => {
	return (
		// create a ul
		<ul>
			{/* loop over movies from props and have them populate lists, which we now have as ListItem component */}
			{props.listItems.map((element, i) => <ListItem key={i} element={element} />)}
			{/* <div>hello{props.listItems}</div> */}
			{}
		</ul>
	);
};

export default List;
