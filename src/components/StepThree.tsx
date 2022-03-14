import { Grid } from '@mui/material';
import { User, Users } from 'assets';
import FormHeading from 'common/FormHeading';
import BigButton from 'common/mui/BigButton';
import FormButton from 'common/mui/FormButton';
import GridContainer from 'common/mui/GridContainer';
import { useEffect, useState } from 'react';
import { CommonProps } from './Types';

const StepThree = ({ setFormStep, setterFunction, data }: CommonProps) => {
	const [usageType, setUsageType] = useState('');

	useEffect(() => {
		setterFunction({ ...data, usageType });
	}, [data, usageType, setterFunction]);

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setFormStep(4);
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
						onClick={() => setUsageType('self')}
					/>
				</Grid>
				<Grid item xs={6}>
					<BigButton
						icon={<Users />}
						title='With my team myself'
						description='Wikis, docs, tasks & projects, all in one place.'
						onClick={() => setUsageType('team')}
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
