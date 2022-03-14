/* Common grid container component for manipulating the spacing across all the form from one place */

import { Grid } from '@mui/material';

type Props = {
	children: React.ReactNode;
};

const GridContainer = ({ children }: Props) => {
	return (
		<Grid container spacing={2} justifyContent='center'>
			{children}
		</Grid>
	);
};

export default GridContainer;
