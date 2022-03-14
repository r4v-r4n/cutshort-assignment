import { Box, Button, Grid, Typography } from '@mui/material';

type Props = {
	icon: React.ReactNode;
	title: string;
	description: string;
};

const BigButton = ({ icon, title, description }: Props) => {
	return (
		<Button variant='outlined'>
			<Box p={2}>
				<Grid container spacing={2}>
					<Grid item xs={12} container justifyContent='flex-start'>
						{icon}
					</Grid>
					<Grid item xs={12} container justifyContent='flex-start'>
						<Typography variant='subtitle2' color='black'>
							{title}
						</Typography>
					</Grid>
					<Grid item xs={12} container justifyContent='flex-start'>
						<Typography variant='caption' color='GrayText'>
							{description}
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</Button>
	);
};

export default BigButton;
