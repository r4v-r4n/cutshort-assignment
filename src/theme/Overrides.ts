// override material-ui styles
import { createTheme } from '@mui/material/styles';
import colors from 'styles/exports.module.scss';
export const overrides = createTheme({
	// overriding material ui button styles
	components: {
		// Name of the component
		MuiButton: {
			styleOverrides: {
				// Name of the slot
				root: {
					// CSS
					textTransform: 'none',
				},
			},
		},
		// updating css for card action area
		MuiCard: {
			styleOverrides: {
				root: {
					// apply border color on hover
					'&:hover': {
						border: `1px solid ${colors.palettePrimaryMain}`,
					},
				},
			},
		},
	},
});
