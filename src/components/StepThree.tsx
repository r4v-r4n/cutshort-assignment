import { Grid } from '@mui/material';
import { User, Users } from 'assets';
import FormHeading from 'common/FormHeading';
import BigButton from 'common/mui/BigButton';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import { useState } from 'react';
import { CommonProps } from './Types';

const StepThree = ({ setFormStep }: CommonProps) => {
	const [workSpace, setWorkSpace] = useState({ workSpaceName: '', workSpaceUrl: '' });

	const handleChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setWorkSpace({ ...workSpace, [name]: value });
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setFormStep(4);
		console.log('Form submitted', workSpace);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12}>
					<FormHeading
						heading='How are you planning to use Eden?'
						subheading="We'll streamline your setup experience accordingly."
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
					<FormButton>Create Workspace</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepThree;
