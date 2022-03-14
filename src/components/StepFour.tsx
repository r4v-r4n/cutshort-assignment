import { Icon, Grid, Avatar } from '@mui/material';
import { Check, User, Users } from 'assets';
import FormHeading from 'common/FormHeading';
import BigButton from 'common/mui/BigButton';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import { useState } from 'react';

const StepFour = () => {
	const [workSpace, setWorkSpace] = useState({ workSpaceName: '', workSpaceUrl: '' });

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log('Form submitted', workSpace);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12} container justifyContent='center'>
					<Avatar sx={{ bgcolor: '#664de5' }}>
						<Check />
					</Avatar>
				</Grid>
				<Grid item xs={12}>
					<FormHeading
						heading='Congratulation,Eren!'
						subheading='You have completed the onboarding,you can start using Eden!'
					/>
				</Grid>
				<Grid item xs={6}>
					<BigButton
						icon={<User />}
						title='For myself'
						description='Write better. Think more clearly. Stay organized.'
					/>
				</Grid>
				<Grid item xs={6}>
					<BigButton
						icon={<Users />}
						title='With my team myself'
						description='Wikis, docs, tasks & projects, all in one place.'
					/>
				</Grid>

				<Grid item xs={12}>
					<FormButton>Launch Eden</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepFour;
