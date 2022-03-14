import { Button, Grid } from '@mui/material';
import FormHeading from 'common/FormHeading';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import InputField from 'common/mui/InputField';
import { useState } from 'react';
import { CommonProps } from './Types';

const StepOne = ({ setFormStep, setterFunction, data }: CommonProps) => {
	const handleChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setterFunction({ ...data, [name]: value });
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		// on form submission update the form step and state of userData
		setFormStep(2);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12} sm={9}>
					<FormHeading
						heading='Welcome! First things first...'
						subheading='You can always change them later.'
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					<InputField
						id='fullName'
						label='Full Name'
						placeholder='Steve Jobs'
						value={data.fullName}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					<InputField
						id='displayName'
						label='Display Name'
						placeholder='Steve'
						value={data.displayName}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					<FormButton>Create Workspace</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepOne;
