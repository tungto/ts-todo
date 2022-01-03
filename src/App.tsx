import React from 'react';
import './App.css';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import ToggleThemeBtn from './Components/ToggleThemeBtn';
import MovieContextProvider from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
	return (
		<div className='App'>
			<MovieContextProvider>
				<ThemeContextProvider>
					<ProgressContextProvider>
						<Navbar />
						<Movies />
						<ToggleThemeBtn />
					</ProgressContextProvider>
				</ThemeContextProvider>
			</MovieContextProvider>
		</div>
	);
}

export default App;
