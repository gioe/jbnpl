import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstitutionCard from './InstitutionSearchCard';
import { CredentialRequest, Credentials, Institution, MembershipRequest, Membership } from "../helpers/types";
import SearchInput from 'react-search-input'
import ReactModal from 'react-modal';
import {isAuthenticated} from "../pages/api/auth";
import {establishMembership, fetchInstitutionCredentials} from "../pages/api/mxClient";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

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
    const [errorMessage, setErrorMessage] = React.useState("");
    const [credentialRequests, setCredentialRequests] = React.useState(initialState.credentialRequests);

    const handleChange = (event: any) => {
        const id = event.target.id
        const value = event.target.value
        const index = credentialRequests.findIndex(element => element.guid == id)
        credentialRequests[index].value = value
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

    const submitCredentials = () => {
        setLoading(true)
        const request = {
            userGuid: isAuthenticated().user.mxId,
            institutionCode: selectedInstitutionCode,
            credentials: credentialRequests,
        } as MembershipRequest

        establishMembership(request)
            .then(data => {
                console.log(data)
                const memberships = data.response.map((value: { connection_status: any; guid: any; is_being_aggregated: any; name: any; user_guid: any; }) => {
                    return {
                        connectionStatus: value.connection_status,
                        guid: value.guid,
                        isBeingAggregated: value.is_being_aggregated,
                        name: value.name,
                        userGuid: value.user_guid,
                    }
                }) as Membership[]
                props.handleFetchedMemberships(memberships)
                setLoading(false)
                setShowModal(false)
            })
    }

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <main>
            <Container sx={{ py: 8 }}>
                <SearchInput
                    style={
                    {
                        width: '100%',
                        height: '50px',
                    }}
                    className="search-input"
                    onChange={props.onSearch} />
            </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
                <ReactModal
                    isOpen={showModal}
                    contentLabel=""
                    style={customStyles}
                >
                    <Box>
                        {credentials.map((credential) => {
                            return <TextField key={credential.fieldType} id={credential.guid}
                                              label={credential.fieldName} variant="outlined" onChange={handleChange}/>
                        })}
                        <LoadingButton
                            onClick={submitCredentials}
                            loading={loading}
                            loadingIndicator="Loading..."
                            variant="outlined"
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                </ReactModal>
                <Grid container spacing={4}>
                    {props.searchResults.map((institution) => (
                        <InstitutionCard key={institution.name} institution={institution} selectInstitution={selectInstitution}/>
                    ))}
                </Grid>
            </Container>
        </main>
    </ThemeProvider>;
}

export default function SearchContent(props: SearchProps) {
    return <Content searchResults={props.searchResults} onSearch={props.onSearch} handleFetchedMemberships={props.handleFetchedMemberships}/>;
}
