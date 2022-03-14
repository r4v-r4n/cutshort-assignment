import { FormControl, FormLabel, OutlinedInput, InputAdornment, Typography } from '@mui/material';

type Props = {
	label: string;
	placeholder: string;
	id: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	hasAdornment?: boolean;
	labelSubtext?: string;
};

const InputField = ({
	id,
	label,
	hasAdornment = false,
	labelSubtext,
	placeholder,
	value,
	onChange,
}: Props) => (
	<>
		<FormControl variant='standard' fullWidth>
			<FormLabel htmlFor={id} sx={{ display: 'flex' }}>
				{label}
				{hasAdornment ? (
					<Typography variant='subtitle2' color='GrayText'>
						{labelSubtext}
					</Typography>
				) : null}
			</FormLabel>
			<OutlinedInput
				id={id}
				size='small'
				placeholder={placeholder}
				name={id}
				value={value}
				onChange={onChange}
				startAdornment={
					hasAdornment ? <InputAdornment position='start'>www.workspace.com/</InputAdornment> : null
				}
			/>
		</FormControl>
	</>
);

export default InputField;
