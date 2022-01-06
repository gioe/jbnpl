import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import withAuth from '../components/withAuth';
import {useRouter} from "next/router";
import {CredentialRequest, Institution, Credentials, MembershipRequest} from "../helpers/types";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import {establishMembership} from "./api/mxClient";
import {isAuthenticated} from "./api/auth";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';

interface State {
    credentialRequests: CredentialRequest[];
}

const initialState: State = {
    credentialRequests: [],
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface ContentProps {
    institution: Institution;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const mdTheme = createTheme();

function Content({institution}: ContentProps) {
    const router = useRouter();

    initialState.credentialRequests = (institution.credentials as Credentials[]).map(value => {
        return {
            guid: value.guid,
            value: ""
        } as CredentialRequest
    })

    const [credentialRequests, setCredentialRequests] = React.useState(initialState.credentialRequests);
    const [error, setErrorMessage] = React.useState('');

    const handleChange = (event: any) => {
        const id = event.target.id
        const value = event.target.value
        const index = credentialRequests.findIndex(element => element.guid == id)
        credentialRequests[index].value = value
        setCredentialRequests([...credentialRequests])
    }

    const submitCredentials = () => {
        const request = {
            userGuid: isAuthenticated().user.mxId,
            institutionCode: institution.code,
            credentials: credentialRequests,
        } as MembershipRequest

        establishMembership(request)
            .then(data => {
                router.push('home');
            })
    }

    return (
        <Box
            sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            {institution.credentials?.map((credential) => {
                return <TextField key={credential.fieldType} id={credential.guid} label={credential.fieldName} variant="outlined"  onChange={handleChange}/>
            })}
            <Button variant="contained" onClick={submitCredentials}>Submit</Button>
        </Box>
    )
}

const Credentials = () => {
    const router = useRouter()
    const institution = JSON.parse(router.query.institution as string) as Institution

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="absolute">
                </AppBar>
                <Box         display="flex"
                             width={500} height={80}
                             bgcolor="lightgreen"
                             alignItems="center"
                             justifyContent="center">
                    <Content institution={institution}/>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default withAuth(Credentials);
