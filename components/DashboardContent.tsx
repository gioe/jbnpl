import * as React from "react";
import {categoryList, Service} from "../helpers/integrations";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PieCard from '../components/PieCard';
import { purchases } from './data.json';
import { Purchase} from '../helpers/integrations';

const theme = createTheme();

interface DashboardProps {
    integratedServices: Service[];
}

interface GridProps {
    data: Purchase[][];
}

const DataGrid: React.FC<GridProps> = (props: GridProps) => {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container
                  rowSpacing={8}
                  columnSpacing={12}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center">
                {props.data.map((data) => (
                    <Grid key={data[0].category} item>
                        <PieCard key={data[0].category} data={data} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

function DashboardContent(props: DashboardProps) {
    function normalizePurchaseData() {
        const selectedIntegrationPurchases =
            (purchases as Purchase[])
            .filter(object => props.integratedServices
            .map(value => value.name).includes(object.companyName))
        return categoryList.map(category => {
                 return selectedIntegrationPurchases.filter(purchase => purchase.category == category.name)
             }).filter(value => value.length > 0)
    }

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <main>
            { props.integratedServices.length > 0 ? <DataGrid data={normalizePurchaseData()}> </DataGrid> : <>No service integrations</> }
        </main>
    </ThemeProvider>;}

export default function Dashboard(props: DashboardProps) {
    return <DashboardContent integratedServices={props.integratedServices}/>;
}
