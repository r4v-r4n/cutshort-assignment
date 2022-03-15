import { Box, Card, CardActionArea, Icon, Typography } from '@mui/material';
import colors from 'styles/exports.module.scss';
type Props = {
	icon: React.ReactNode;
	title: string;
	description: string;
	active: boolean;
	onClick: () => void;
};

const BigButton = ({ icon, title, description, active, onClick }: Props) => {
	return (
		<Card
			elevation={0}
			sx={{
				border: 1,
				borderColor: active ? colors?.palettePrimaryMain : 'lightgray',
			}}>
			<CardActionArea onClick={onClick}>
				<Box
					display='flex'
					flexDirection='column'
					alignItems='flex-start'
					justifyContent='flex-start'
					gap={1}
					p={2}>
					<Box>
						<Icon color={active ? 'primary' : 'inherit'}>{icon}</Icon>
					</Box>
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
