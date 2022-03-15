import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
	[`&.${stepConnectorClasses.alternativeLabel}`]: {
		top: 15,
		left: 'calc(-50% + -12px)',
		width: '100%',
	},
	[`&.${stepConnectorClasses.active}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: theme.palette.primary.main,
		},
	},
	[`&.${stepConnectorClasses.completed}`]: {
		[`& .${stepConnectorClasses.line}`]: {
			backgroundColor: theme.palette.primary.main,
		},
	},
	[`& .${stepConnectorClasses.line}`]: {
		height: 2,
		border: 0,
		backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
		borderRadius: 1,
	},
}));

const ColorlibStepIconRoot = styled('div')<{
	ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
	// backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
	backgroundColor: '#fff',
	zIndex: 1,
	color: '#000',
	width: 30,
	height: 30,
	display: 'flex',
	borderRadius: '50%',
	justifyContent: 'center',
	alignItems: 'center',
	border: '1px solid lightgray',
	...(ownerState.active && {
		color: '#fff',
		border: `1px solid ${theme.palette.primary.main}`,
		backgroundColor: theme.palette.primary.main,
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	}),
	...(ownerState.completed && {
		border: `1px solid ${theme.palette.primary.main}`,
		color: '#fff',
		backgroundColor: theme.palette.primary.main,
	}),
}));

function ColorlibStepIcon(props: StepIconProps) {
	const { active, completed, className } = props;

	const icons: { [index: string]: number } = {
		1: 1,
		2: 2,
		3: 3,
		4: 4,
	};

	return (
		<ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
			{icons[String(props.icon)]}
		</ColorlibStepIconRoot>
	);
}

type Props = {
	formStep: number;
};
const steps = ['1', '2', '3', '4'];

export default function CustomizedStepper(props: Props) {
	const { formStep } = props;
	return (
		<Stack sx={{ width: '100%' }} spacing={4}>
			<Stepper alternativeLabel activeStep={formStep - 1} connector={<ColorlibConnector />}>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
					</Step>
				))}
			</Stepper>
		</Stack>
	);
}
