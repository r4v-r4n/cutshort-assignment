import { Grid } from '@mui/material';
import FormHeading from 'common/FormHeading';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import InputField from 'common/mui/InputField';
import { CommonProps } from './Types';

const StepTwo = ({ setFormStep, setterFunction, data }: CommonProps) => {
	const handleChange = (event: { target: { name: any; value: any } }) => {
		const { name, value } = event.target;
		setterFunction({ ...data, [name]: value });
	};

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		// on form submission update the form step and state of userData
		setFormStep(3);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12} sm={9}>
					<FormHeading
						heading="Let's set up a home for all your work"
						subheading='You can always create another workspace later.'
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					<InputField
						id='workSpaceName'
						label='Workspace Name'
						placeholder='Eden'
						value={data.workSpaceName}
						onChange={handleChange}
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					<InputField
						id='workSpaceUrl'
						label='Workspace URL'
						placeholder='Example'
						value={data.workSpaceUrl}
						onChange={handleChange}
						hasAdornment
						labelSubtext='(optional)'
					/>
				</Grid>
				<Grid item xs={12} sm={9}>
					<FormButton>Create Workspace</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepTwo;
