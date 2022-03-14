import { Box, Container } from '@mui/material';
import { Logo } from 'assets';
import { useState } from 'react';
import StepFour from './StepFour';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

const Form = () => {
	const [formStep, setFormStep] = useState(1);

	const formSwitcher = () => {
		switch (formStep) {
			case 1:
				return <StepOne setFormStep={setFormStep} />;
			case 2:
				return <StepTwo setFormStep={setFormStep} />;
			case 3:
				return <StepThree setFormStep={setFormStep} />;
			case 4:
				return <StepFour />;

			default:
				break;
		}
	};

	return (
		<Container maxWidth='sm'>
			<Box p={10}>
				<Box display={'flex'} alignItems='center' justifyContent='center'>
					<img src={Logo} alt='logo' />
				</Box>
				{formSwitcher()}
			</Box>
		</Container>
	);
};

export default Form;
