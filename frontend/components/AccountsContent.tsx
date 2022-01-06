import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Account} from "../helpers/types";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { AccountType } from "../helpers/accountEnums";

const theme = createTheme();

interface AccountProps {
    accounts: Account[];
}

function Content(props: AccountProps) {

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <main>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Checking</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.accounts.length > 0 ? `$${props.accounts.filter(value => value.type === AccountType.CHECKING)[0].availableBalance}` : "$0"}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Savings</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.accounts.length > 0 ? `$${props.accounts.filter(value => value.type === AccountType.SAVINGS)[0].availableBalance}` : "$0"}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Total Liquidity</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.accounts.length > 0 ? `$${Math.round(props.accounts.reduce((sum, current) => sum + current.availableBalance, 0) * 100) / 100}` : "$0"}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </main>
    </ThemeProvider>;
}

export default function AccountsContent(props: AccountProps) {
    return <Content accounts={props.accounts}/>;
}
