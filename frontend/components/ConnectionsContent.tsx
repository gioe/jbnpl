import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MembershipCard from "./MembershipCard";
import {
    CredentialRequest,
    Credentials,
    CredentialsUpdateRequest,
    Membership,
    MembershipRequest
} from "../helpers/types";
import ReactModal from 'react-modal';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import {fetchInstitutionCredentials, updateMembershipCredentials} from "../pages/api/mxClient";

interface State {
    credentialRequests: CredentialRequest[];
}

const initialState: State = {
    credentialRequests: [],
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const theme = createTheme();

interface Props {
    memberships: Membership[];
}

const Content: React.FC<Props> = (props) => {

    const [loading, setLoading] = React.useState(false);
    const [showAuthModal, setShowAuthModal] = React.useState(false)
    const [showChallengeModal, setShowChallengeModal] = React.useState(false)
    const [credentials, setCredentials] = React.useState<Credentials[]>([]);
    const [error, setError] = React.useState(false);
    const [credentialRequests, setCredentialRequests] = React.useState(initialState.credentialRequests);
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
    const [memberGuid, setMemberGuid] = React.useState("");

    const submitCredentials = () => {
        setLoading(true)
        const request = {
            memberGuid: memberGuid,
            credentials: credentialRequests,
        } as CredentialsUpdateRequest

        updateMembershipCredentials(request).then(data => {
            setLoading(false)
            setShowAuthModal(false)
        })
    }

    const handleChange = (event: any) => {
        const id = event.target.id
        const value = event.target.value
        const index = credentialRequests.findIndex(element => element.guid == id)
        credentialRequests[index].value = value
        const credentialsAreMissing = credentialRequests.filter(credential => credential.value.length == 0).length > 0
        setSubmitButtonDisabled(credentialsAreMissing)
        setCredentialRequests([...credentialRequests])
    }

    const escape = () => {
        setShowAuthModal(false)
    }

    const handleMultfactorAuth = (membership: Membership) => {
        setShowChallengeModal(true)
    }

    const handleAuthenticate = (membership: Membership) => {
        fetchInstitutionCredentials(membership.institutionCode)
            .then(data => {
                const credentials = data.response.credentials.map((value: { field_name: string; guid: string; label: string; display_order: number; field_type: string; }) => {
                    return {
                        fieldName: value.field_name.charAt(0).toUpperCase() + value.field_name.substring(1),
                        guid: value.guid,
                        label: value.label,
                        displayOrder: value.display_order,
                        fieldType: value.field_type,
                    }
                })

                const credentialRequests =  credentials.map((value: { guid: any; }) => {
                    return {
                        guid: value.guid,
                        value: ""
                    } as CredentialRequest
                })

                setCredentialRequests([...credentialRequests])
                setMemberGuid(membership.guid)
                setCredentials(credentials)
                setShowAuthModal(true)
            })
    }

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
            <ReactModal
                isOpen={showAuthModal}
                contentLabel=""
                style={customStyles}
            >
                <Stack
                    component="form"
                    sx={{
                        width: '25ch',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    {credentials.map((credential) => {
                        let fieldType = undefined
                        if (credential.fieldType == "PASSWORD") {
                            fieldType = "password"
                        }
                        return <TextField key={credential.fieldType}
                                          id={credential.guid}
                                          label={credential.fieldName}
                                          type={fieldType}
                                          error={error}
                                          variant="outlined"
                                          onChange={handleChange}/>
                    })}
                    <LoadingButton
                        onClick={submitCredentials}
                        loading={loading}
                        loadingIndicator="Loading..."
                        variant="outlined"
                        disabled={submitButtonDisabled}
                    >
                        Submit
                    </LoadingButton>
                    <Button variant="outlined"
                            onClick={escape}>
                        Cancel
                    </Button>
                </Stack>
            </ReactModal>
        <ReactModal
            isOpen={showChallengeModal}
            contentLabel=""
            style={customStyles}
        >
            <Stack
                component="form"
                sx={{
                    width: '25ch',
                }}
                spacing={2}
                noValidate
                autoComplete="off"
            >
            </Stack>
        </ReactModal>
        <Box>
            {props.memberships.length > 0 ? props.memberships.map((membership) => (
                <MembershipCard key={membership.guid} membership={membership} onMultifactorAuth={handleMultfactorAuth} onAuthenticate={handleAuthenticate}/>
            )) : <></>}
        </Box>
    </ThemeProvider>;
}

export default function ConnectionsContent(props: Props) {
    return <Content memberships={props.memberships}/>;
}
