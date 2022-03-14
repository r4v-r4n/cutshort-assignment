import { Button, Grid } from '@mui/material';
import FormHeading from 'common/FormHeading';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import InputField from 'common/mui/InputField';
import { useState } from 'react';
import { CommonProps } from './Types';

const StepOne = ({ setFormStep }: CommonProps) => {
	const [user, setUser] = useState({ fullName: '', displayName: '' });

	const handleChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		// on form submission update the form step and state of userData
		setFormStep(2);
		console.log('Form submitted', user);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12}>
					<FormHeading
						heading='Welcome! First things first...'
						subheading='You can always change them later.'
					/>
				</Grid>
				<Grid item xs={12}>
					<InputField
						id='fullName'
						label='Full Name'
						placeholder='Steve Jobs'
						value={user.fullName}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<InputField
						id='displayName'
						label='Display Name'
						placeholder='Steve'
						value={user.displayName}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormButton>Create Workspace</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepOne;
