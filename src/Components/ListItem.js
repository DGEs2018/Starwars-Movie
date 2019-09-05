import React from 'react';

const ListItem = (props) => {
	// within the div, element is now passed via props from the parent List, which had the individual element items in the movies array populated (line 9, on the List.js file)
	return <div>{props.element}</div>;
};

export default ListItem;
