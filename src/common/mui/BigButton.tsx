import { Box, Button, Card, CardActionArea, Typography } from '@mui/material';

type Props = {
	icon: React.ReactNode;
	title: string;
	description: string;
	onClick: () => void;
};

const BigButton = ({ icon, title, description, onClick }: Props) => {
	return (
		<Card
			elevation={0}
			sx={{
				border: 1,
				borderColor: 'lightGray',
			}}>
			<CardActionArea onClick={onClick}>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='flex-start'
					justifyContent='flex-start'
					gap={2}
					p={2}>
					<Box>{icon}</Box>
					<Box>
						{' '}
						<Typography variant='subtitle2' color='black'>
							{title}
						</Typography>
					</Box>
					<Box>
						<Typography variant='caption' color='GrayText' align='left'>
							{description}
						</Typography>
					</Box>
				</Box>
			</CardActionArea>
		</Card>
	);
};

export default BigButton;
