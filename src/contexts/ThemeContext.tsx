import { PropTypes } from '@material-ui/core';
import { createContext, useState } from 'react';

interface ThemeContextProviderProps {
	children: React.ReactNode;
}
interface ThemeContextDefault {
	theme: PropTypes.Color;
	toggleTheme: (theme: PropTypes.Color) => void;
}

const themeContextDefaultData: ThemeContextDefault = {
	theme: 'primary' as PropTypes.Color,
	toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextDefault>(
	themeContextDefaultData
);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	const [theme, setTheme] = useState<PropTypes.Color>(
		themeContextDefaultData.theme
	);

	const toggleTheme = (theme: PropTypes.Color) => {
		setTheme(theme);
	};

	const themeContextDynamicData = {
		theme,
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={themeContextDynamicData}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
