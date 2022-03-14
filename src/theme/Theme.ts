import { createTheme } from '@mui/material/styles';
import { overrides } from './Overrides';
import colors from 'styles/exports.module.scss';
const { components } = overrides;

export const theme = createTheme({
	palette: {
		primary: {
			main: colors.palettePrimaryMain,
		},
	},
	typography: {
		fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
	},
	components,
});
