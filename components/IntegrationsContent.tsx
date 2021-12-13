import * as React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {serviceList} from '../helpers/integrations';
import ServiceCard from '../components/ServiceCard';

const theme = createTheme();

function IntegrationsList() {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <main>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {serviceList.map((service) => (
                        <ServiceCard key={service.name} service={service} />
                    ))}
                </Grid>
            </Container>
        </main>
    </ThemeProvider>;
}

export default function Integrations() {
    return <IntegrationsList />;
}
