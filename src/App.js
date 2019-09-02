import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
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
				<div style={{ display: 'inline-block' }}>
					<ul>
						<li>First</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
				</div>
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
				<div style={{ display: 'inline-block' }}>
					<ul>
						<li>First</li>
						<li>Second</li>
						<li>Third</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
