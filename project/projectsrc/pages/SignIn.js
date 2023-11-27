import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      // Add logic to handle authentication and error handling here
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
      // If authentication is successful, redirect to the home page
    } catch (error) {
      // Display an error message or handle the error appropriately
      console.error('Login failed:', error.message);
    }
  };

  return (
    <body className='signInPage'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="md" style={{ minHeight: '70vh' }} className="sign">
          {/* Increase minHeight to set a minimum height */}
          <CssBaseline />
          <Box
            sx={{
              boxShadow: 3,
              borderRadius: 2,
              px: 8,
              py: 10,
               // Dark background color
              color: '#fff',   // White text color
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className="signIn"
          >
            <Typography component="h1" variant="h5" style={{ color: '#BBDEFB' }}>
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                color="secondary" // Dark text color for the input
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary" // Dark text color for the input
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#2196F3' }} // Dark blue background color for the button
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{ color: '#888' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2" style={{ color: '#888' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </body>
  );
}
