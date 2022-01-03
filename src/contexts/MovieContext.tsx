import { createContext, useState } from 'react';
import { uuid } from 'uuidv4';

interface MovieContextProviderProps {
	children: React.ReactNode;
}

interface Movie {
	id: string;
	title: string;
}

interface MovieContextDefault {
	movies: Movie[];
	addMovie: (title: string) => void;
	removeMovie: (id: string) => void;
}

const movieContextDefaultData: MovieContextDefault = {
	movies: [],
	addMovie: () => {},
	removeMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(
	movieContextDefaultData
);

const MovieContextProvider = ({ children }: MovieContextProviderProps) => {
	const [movies, setMovies] = useState<Movie[]>(movieContextDefaultData.movies);

	const addMovie = (title: string) => {
		setMovies([...movies, { id: uuid(), title }]);
	};
	const removeMovie = (id: string) => {
		console.log('remove movie', id, movies);
		const newMovies = movies.filter((movie) => movie.id !== id);
		setMovies(newMovies);
	};

	const movieContextData = {
		addMovie,
		removeMovie,
		movies,
	};

	return (
		<MovieContext.Provider value={movieContextData}>
			{children}
		</MovieContext.Provider>
	);
};

export default MovieContextProvider;
