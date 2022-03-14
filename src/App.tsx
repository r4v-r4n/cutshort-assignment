import { Box } from '@mui/material';
import Form from 'components/Form';

function App() {
	return (
		<Box
			className='App'
			sx={{ height: '100vh' }}
			display='flex'
			alignItems={'center'}
			justifyContent='center'>
			<Form />
		</Box>
	);
}

export default App;
