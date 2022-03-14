import { Box, Container, StepLabel, Stepper, Step } from '@mui/material';
import { Logo } from 'assets';
import { useState } from 'react';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const Form = () => {
	const [formStep, setFormStep] = useState(1);
	const steps = ['', '', '', ''];

	const [userDetails, setUserDetails] = useState({});

	// state for step four

	const formSwitcher = () => {
		switch (formStep) {
			case 1:
				return (
					<StepOne setFormStep={setFormStep} setterFunction={setUserDetails} data={userDetails} />
				);
			case 2:
				return (
					<StepTwo setFormStep={setFormStep} setterFunction={setUserDetails} data={userDetails} />
				);
			case 3:
				return (
					<StepThree setFormStep={setFormStep} setterFunction={setUserDetails} data={userDetails} />
				);
			case 4:
				return <StepFour userDetails={userDetails} />;

			default:
				break;
		}
	};

	return (
		<Container maxWidth='sm'>
			<Box display={'flex'} alignItems='center' justifyContent='center'>
				<img src={Logo} alt='logo' />
			</Box>
			<Box my={6}>
				<Stepper activeStep={formStep - 1} alternativeLabel>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel></StepLabel>
						</Step>
					))}
				</Stepper>
			</Box>
			{formSwitcher()}
		</Container>
	);
};

export default Form;
