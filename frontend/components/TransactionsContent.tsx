import * as React from 'react';
import { Transaction} from "../helpers/types";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TransactionCard from "./TransactionCard";

const theme = createTheme();

interface TransactionsProps {
    transactions: Transaction[];
}

function Content(props: TransactionsProps) {
    console.log(props.transactions)
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <Box>
            {props.transactions.length > 0 ? props.transactions.map((transaction) => (
                <TransactionCard key={transaction.description} transaction={transaction} />
            )) : <></>}
        </Box>
    </ThemeProvider>;
}

export default function TransactionsContent(props: TransactionsProps) {
    return <Content transactions={props.transactions}/>;
}
