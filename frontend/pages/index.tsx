import React from "react";
import { useRouter } from 'next/router';
import Avatar from '@mui/material/Avatar';
import LoadingButton from '@mui/lab/LoadingButton';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {authenticate, login} from "./api/auth";
import { useCookies } from 'react-cookie';
import ConnectionsContent from "../components/ConnectionsContent";
import SearchContent from "../components/SearchContent";
import AccountsContent from "../components/AccountsContent";
import TransactionsContent from "../components/TransactionsContent";

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

const SignupPage = () => {
    const router = useRouter();
    const [error, setErrorMessage] = React.useState('');
    const [signingIn, setSigningIn] = React.useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleTextInput = (event: any) => {
        const id = event.target.id
        const value = event.target.value

        switch (id) {
            case "password":
                setPassword(value)
                break
            default:
                setEmail(value)
        }
    }

    const signIn = () => {
        const name = null;
        setSigningIn(true)
        login({name, email, password})
            .then(data => {
                setSigningIn(false)
                if (data.error) {
                    setErrorMessage(data.error)
                } else {
                    authenticate(data)
                    setCookie('jwt', JSON.stringify(data), { path: '/', maxAge: 3600, sameSite: true });
                    router.push('/home')
                }
            })
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={handleTextInput}
                                autoFocus
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
                                onChange={handleTextInput}
                            />
                            <LoadingButton onClick={signIn}
                                           loading={signingIn}
                                           loadingIndicator="Signing In..."
                                           variant="contained"
                                           fullWidth>
                                Sign In
                            </LoadingButton>
                            <Grid container>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default SignupPage;
