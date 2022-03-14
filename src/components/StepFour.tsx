import { Avatar, Grid } from '@mui/material';
import { Check, User, Users } from 'assets';
import FormHeading from 'common/FormHeading';
import BigButton from 'common/mui/BigButton';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';

type Props = {
	userDetails: object;
};

const StepFour = ({ userDetails }: Props) => {
	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		console.log('submitted with values', userDetails);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12} sm={9} container justifyContent='center'>
					<Avatar sx={{ bgcolor: '#664de5' }}>
						<Check />
					</Avatar>
				</Grid>
				<Grid item xs={12} sm={9}>
					<FormHeading
						heading='Congratulation,Eren!'
						subheading='You have completed the onboarding,you can start using Eden!'
					/>
				</Grid>

				<Grid item xs={12} sm={9}>
					<FormButton>Launch Eden</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepFour;
