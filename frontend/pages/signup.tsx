import React from "react";
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {authenticate, login, signup} from "./api/auth";
import {useCookies} from "react-cookie";
import LoadingButton from "@mui/lab/LoadingButton";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                BNPL
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {

    const router = useRouter();

    const [error, setErrorMessage] = React.useState('');
    const [redirectToReferer, setRedirectToReferer] = React.useState(false);
    const [signingUp, setSigningUp] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [lastName, setLastName] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleTextInput = (event: any) => {
        const id = event.target.id
        const value = event.target.value

        switch (id) {
            case "password":
                setPassword(value)
                break
            case "email":
                setEmail(value)
                break
            case "lastName":
                setLastName(value)
                break
            default:
                setFirstName(value)
                break
        }
    }

    const signupUser = () => {
        setSigningUp(true)
        const name = firstName + ' ' +  lastName
        signup({name, email, password})
            .then(data => {
                setSigningUp(false)
                if (data.error) {
                    setErrorMessage(data.error)
                } else {
                    return login({name, email, password})
                }
            }).then(data => {
            if (data.error) {
                setErrorMessage(data.error)
            } else {
                authenticate(data)
                setCookie('jwt', JSON.stringify(data), { path: '/', maxAge: 3600, sameSite: true });
                router.push('/home')
            }
        })
    }

    return <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    onChange={handleTextInput}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    onChange={handleTextInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleTextInput}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleTextInput}
                                />
                            </Grid>
                        </Grid>
                        <LoadingButton onClick={signupUser}
                                       loading={signingUp}
                                       loadingIndicator="Signing In..."
                                       variant="contained"
                                       fullWidth>
                            Sign Up
                        </LoadingButton>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
}
