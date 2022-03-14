/* Button with common styling and other attributes */

import { Button } from '@mui/material';
import React from 'react';

type Props = {
	children: React.ReactNode;
};
const FormButton = ({ children }: Props) => {
	return (
		<Button variant='contained' color='primary' type='submit' fullWidth>
			{children}
		</Button>
	);
};

export default FormButton;
