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
	}, [usageType]);

	const handleSubmit = (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setFormStep(4);
	};

	return (
		<form onSubmit={handleSubmit}>
			<GridContainer>
				<Grid item xs={12} sm={9}>
					<FormHeading
						heading='How are you planning to use Eden?'
						subheading="We'll streamline your setup experience accordingly."
					/>
				</Grid>
				<Grid item xs={6} sm={4.5}>
					<BigButton
						icon={<User />}
						title='For myself'
						description='Write better. Think more clearly. Stay organized.'
						active={usageType === 'self'}
						onClick={() => setUsageType('self')}
					/>
				</Grid>
				<Grid item xs={6} sm={4.5}>
					<BigButton
						icon={<Users />}
						title='With my team'
						description='Wikis, docs, tasks & projects, all in one place.'
						onClick={() => setUsageType('team')}
						active={usageType === 'team'}
					/>
				</Grid>

				<Grid item xs={12} sm={9}>
					<FormButton>Create Workspace</FormButton>
				</Grid>
			</GridContainer>
		</form>
	);
};

export default StepThree;
