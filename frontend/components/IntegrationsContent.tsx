import * as React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {serviceList} from '../helpers/services';
import ServiceCard from '../components/ServiceCard';
import {Service, ServiceSelectionState} from "../helpers/types";

const theme = createTheme();

interface IntegrationProps {
    integrationStates: ServiceSelectionState[];
    onSelect: (selection: Service) => void;
}

function IntegrationsList(props: IntegrationProps) {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {props.integrationStates.map((state) => (
                        <ServiceCard key={state.service.name} service={state.service} isSelected={state.isSelected} onSelect={props.onSelect}/>
                    ))}
                </Grid>
            </Container>
        </main>
    </ThemeProvider>;
}

export default function Integrations(props: IntegrationProps) {
    return <IntegrationsList integrationStates={props.integrationStates} onSelect={props.onSelect}/>;
}
