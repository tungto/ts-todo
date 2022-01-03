import {
	AppBar,
	Box,
	Button,
	Chip,
	FormControl,
	MenuItem,
	Select,
	Toolbar,
	Typography,
} from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import WelcomeMessage from './WelcomeMessage';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { clearInterval, setInterval } from 'timers';
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		positionSelected: {
			color: 'white',
			borderBottom: '1px solid white',
		},
	})
);
const Navbar = () => {
	const classes = useStyles();

	const { lastTime, status } = useContext(ProgressContext);

	const { theme } = useContext(ThemeContext);

	const [position, setPosition] = useState<string>('Full-stack Developer');
	const [time, setTime] = useState<Date>(() => new Date(Date.now()));

	// use effects
	useEffect(() => {
		const timer = setInterval(() => setTime(() => new Date(Date.now())), 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	const onPositionChange = (
		e: React.ChangeEvent<{
			value: unknown;
		}>
	) => {
		setPosition(e.target.value as string);
	};

	return (
		<AppBar position='static' color={theme}>
			<Toolbar>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					width={1}
					py={2}
				>
					<Typography variant='h6'>My movies</Typography>
					<Box textAlign='center'>
						<WelcomeMessage position={position} />
						<Chip
							label={`Last time working on this project ${lastTime} -Status: ${status}`}
						/>
						<Box mt={1}>
							<FormControl>
								<Select
									value={position}
									onChange={onPositionChange}
									className={classes.positionSelected}
								>
									<MenuItem value='Full-stack Developer'>
										Full Stack Developer
									</MenuItem>
									<MenuItem value='Front-end Developer'>
										Front End Developer
									</MenuItem>
									<MenuItem value='Back-end Developer'>
										Back End Developer
									</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>

					<Box textAlign='center'>
						<Box my={1}>
							<Typography variant='h6'>{time.toUTCString()}</Typography>
						</Box>
						<Button variant='contained'>Login</Button>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
