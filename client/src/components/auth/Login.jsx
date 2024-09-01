import { Box, TextField, Button, Typography } from '@mui/material';

const Login = () => {
    return (
        <Box
            sx={{
                width: 400,
                margin: '100px auto',
                padding: 4,
                boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)', // deeper shadow for a more prominent effect
                borderRadius: '10px', // more rounded corners for a modern look
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: '#f5f5f5', // light gray background for a soft feel
            }}
        >
            <img src="home.jpg" height="100px" width="150px" alt="Logo" style={{ marginBottom: '20px' }} />
            <Typography variant="h6" sx={{ mb: 2 }}>
                Welcome  to Blog!
            </Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }}
            />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                sx={{ mb: 3, bgcolor: 'white', borderRadius: 1 }}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mb: 2, py: 1.5, fontSize: '16px' }}
            >
                Login
            </Button>
            <Button
                variant="outlined"
                fullWidth
                sx={{ py: 1.5, fontSize: '16px' }}
            >
                Create a New Account
            </Button>
        </Box>
    );
};

export default Login;
