import { Typography } from '@mui/material';

type Props = {
	heading: string;
	subheading: string;
};

const FormHeading = ({ heading, subheading }: Props) => (
	<>
		<Typography variant='h6' align='center'>
			{heading}
		</Typography>
		<Typography variant='subtitle2' color='textSecondary' align='center'>
			{subheading}
		</Typography>
	</>
);

export default FormHeading;
