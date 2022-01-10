import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstitutionCard from './InstitutionSearchCard';
import { CredentialRequest, Credentials, Institution, MembershipRequest, Membership } from "../helpers/types";
import ReactModal from 'react-modal';
import {isAuthenticated} from "../pages/api/auth";
import {establishMembership, fetchInstitutionCredentials} from "../pages/api/mxClient";
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import {ConnectionStatus} from "../helpers/userEnums";

const theme = createTheme();

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

interface SearchProps {
    onSearch: (seachTerm: string) => void;
    handleFetchedMemberships: (memberships: Membership[]) => void;
    searchResults: Institution[];
}

function Content(props: SearchProps) {

    const [credentials, setCredentials] = React.useState<Credentials[]>([]);
    const [showModal, setShowModal] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [selectedInstitutionCode, setSelectedInstitutionCode] = React.useState("");
    const [error, setError] = React.useState(false);
    const [credentialRequests, setCredentialRequests] = React.useState(initialState.credentialRequests);
    const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState(true);
    const [searchInput, setSearchInput] = React.useState("");

    const handleChange = (event: any) => {
        const id = event.target.id
        const value = event.target.value
        const index = credentialRequests.findIndex(element => element.guid == id)
        credentialRequests[index].value = value
        const credentialsAreMissing = credentialRequests.filter(credential => credential.value.length == 0).length > 0
        setSubmitButtonDisabled(credentialsAreMissing)
        setCredentialRequests([...credentialRequests])
    }

    const selectInstitution = (institution: Institution) => {
        fetchInstitutionCredentials(institution)
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
                setSelectedInstitutionCode(institution.code)
                setShowModal(true)
            })
    };

    const escape = () => {
        setShowModal(false)
    }

    const submitCredentials = () => {
        setLoading(true)
        const request = {
            userGuid: isAuthenticated().user.mxId,
            institutionCode: selectedInstitutionCode,
            credentials: credentialRequests,
        } as MembershipRequest

        establishMembership(request)
            .then(data => {
                if (data.error) {
                    setError(true)
                    setLoading(false)
                } else {
                    const memberships = data.response.map((value: { user_guid: string; guid: any; aggregated_at: any; is_being_aggregated: any; successfully_aggregated_at: any; connection_status: any; is_authenticated: any; name: any; institution_code: any; }) => {
                        return {
                            guid: value.guid,
                            aggregatedAt: value.aggregated_at,
                            isBeingAggregated: value.is_being_aggregated,
                            successfullyAggregatedAt: value.successfully_aggregated_at,
                            connectionStatus: value.connection_status,
                            isAuthenticated: value.is_authenticated,
                            name: value.name,
                            institutionCode: value.institution_code,
                            userGuid: value.user_guid
                        }
                    }) as Membership[]
                    props.handleFetchedMemberships(memberships)
                    setError(false)
                    setLoading(false)
                    setShowModal(false)
                }
            })
    }

    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};


    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <Container sx={{ py: 8 }}>
            <input
                style={BarStyling}
                key="random1"
                value={searchInput}
                placeholder={"Search banking institutions"}
                onChange={(e) => {
                    setSearchInput(e.target.value)
                    props.onSearch(e.target.value)
                }}
            />
        </Container>
        <Container sx={{ py: 8 }} maxWidth="md">
            <ReactModal
                    isOpen={showModal}
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
            <Grid container spacing={4}>
                {props.searchResults.map((institution) => (
                    <InstitutionCard key={institution.name} institution={institution} selectInstitution={selectInstitution}/>
                ))}
            </Grid>
        </Container>
    </ThemeProvider>;
}

export default function SearchContent(props: SearchProps) {
    return <Content searchResults={props.searchResults} onSearch={props.onSearch} handleFetchedMemberships={props.handleFetchedMemberships}/>;
}
