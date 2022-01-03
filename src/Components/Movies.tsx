import {
	Box,
	Button,
	Chip,
	createStyles,
	makeStyles,
	PropTypes,
	TextField,
	Theme,
} from '@material-ui/core';
import React, { ChangeEvent, useContext, useState } from 'react';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		movieInput: {
			marginRight: '5px',
		},
		movieChip: {
			fontSize: '2rem',
			padding: '30px 5px',
			margin: '5px',
		},
	})
);
const Movies = () => {
	const classes = useStyles();

	const [movie, setMovie] = useState('');
	const { movies, addMovie, removeMovie } = useContext(MovieContext);
	const { theme } = useContext(ThemeContext);

	const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;

	const onMovieInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMovie(e.target.value);
	};

	const onAddMovie = () => {
		addMovie(movie);
		setMovie('');
	};
	const onRemoveMovie = (id: string) => {
		console.log('log id' + id);
		removeMovie(id);
		setMovie('');
	};

	return (
		<>
			<Box display='flex' justifyContent='center' mt={5}>
				<TextField
					label='Your favorite movies'
					variant='outlined'
					className={classes.movieInput}
					onChange={onMovieInputChange}
					value={movie}
				/>
				<Button variant='contained' color='primary' onClick={onAddMovie}>
					Add Movie
				</Button>
			</Box>
			<Box display='flex' justifyContent='center' mx={5} mt={5} flexWrap='wrap'>
				{movies.map((movie) => {
					return (
						<Chip
							label={movie.title}
							onClick={() => onRemoveMovie(movie.id)}
							key={movie.id}
							clickable
							color={chipTheme}
							className={classes.movieChip}
						/>
					);
				})}
			</Box>
		</>
	);
};

export default Movies;
