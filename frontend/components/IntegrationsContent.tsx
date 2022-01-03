import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstitutionCard from './InstitutionCard';
import {Institution} from "../helpers/types";
import SearchInput from 'react-search-input'

const theme = createTheme();

interface IntegrationProps {
    onSearch: (seachTerm: string) => void;
    searchResults: Institution[];
}

function IntegrationsList(props: IntegrationProps) {
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
                <Grid container spacing={4}>
                    {props.searchResults.map((institution) => (
                        <InstitutionCard key={institution.name} institution={institution} />
                    ))}
                </Grid>
            </Container>
        </main>
    </ThemeProvider>;
}

export default function Integrations(props: IntegrationProps) {
    return <IntegrationsList searchResults={props.searchResults} onSearch={props.onSearch}/>;
}
