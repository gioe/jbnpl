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
    Challenge
} from "../helpers/types";
import ReactModal from 'react-modal';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import {fetchInstitutionCredentials, getMemberStatus, updateMembershipCredentials} from "../pages/api/mxClient";
import ChallengeContent from "./ChallengeContent";

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

    const [memberships, setMemberships] = React.useState(props.memberships);
    const [memberGuid, setMemberGuid] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [showAuthModal, setShowAuthModal] = React.useState(false)
    const [showChallengeModal, setShowChallengeModal] = React.useState(false)
    const [credentials, setCredentials] = React.useState<Credentials[]>([]);
    const [error, setError] = React.useState(false);
    const [credentialRequests, setCredentialRequests] = React.useState(initialState.credentialRequests);
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
    const [challenges, setChallenges] = React.useState<Challenge[]>([]);

    const updateMember = (member: any) => {
        const membershipIndex = memberships.findIndex(element => element.guid == member.guid)
        memberships[membershipIndex].aggregatedAt = member.aggregated_at
        memberships[membershipIndex].successfullyAggregatedAt = member.successfully_aggregated_at
        memberships[membershipIndex].connectionStatus = member.connection_status
        memberships[membershipIndex].isAuthenticated = member.is_authenticated
        setMemberships([...memberships])
    }

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

    const closeAuthModal = () => {
        setShowAuthModal(false)
    }

    const closeChallengeModal = () => {
        setShowChallengeModal(false)
    }

    const handleMultfactorAuth = (membership: Membership) => {
        getMemberStatus(membership.guid).then(data => {
            if (data.response.member.challenges) {
                const parsedChallenges = data.response.member.challenges.map((value: any) => {
                    return {
                        fieldName: value.field_name,
                        guid: value.guid,
                        label: value.label,
                        type: value.type
                    }
                })
                setMemberGuid(membership.guid)
                setChallenges(parsedChallenges)
                setShowChallengeModal(true)
            }
        })
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
                            onClick={closeAuthModal}>
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
                <ChallengeContent memberGuid={memberGuid}
                                  challenges={challenges}
                                  closeChallengeModal={closeChallengeModal}
                                  handleMemberUpdate={updateMember}
                />
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
