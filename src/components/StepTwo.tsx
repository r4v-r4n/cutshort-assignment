import { Button, Grid } from '@mui/material';
import FormHeading from 'common/FormHeading';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import InputField from 'common/mui/InputField';
import { useState } from 'react';
import { CommonProps } from './Types';

const StepTwo = ({ setFormStep }: CommonProps) => {
	const [workSpace, setWorkSpace] = useState({ workSpaceName: '', workSpaceUrl: '' });

	const handleChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setWorkSpace({ ...workSpace, [name]: value });
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		// on form submission update the form step and state of userData
		setFormStep(3);
		console.log('Form submitted', workSpace);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12}>
					<FormHeading
						heading="Let's set up a home for all your work"
						subheading='You can always create another workspace later.'
					/>
				</Grid>
				<Grid item xs={12}>
					<InputField
						id='workSpaceName'
						label='Workspace Name'
						placeholder='Steve Jobs'
						value={workSpace.workSpaceName}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12}>
					<InputField
						id='workSpaceUrl'
						label='Workspace URL'
						placeholder='Steve'
						value={workSpace.workSpaceUrl}
						onChange={handleChange}
						hasAdornment
						labelSubtext='(optional)'
					/>
				</Grid>
				<Grid item xs={12}>
					<FormButton>Create Workspace</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepTwo;
