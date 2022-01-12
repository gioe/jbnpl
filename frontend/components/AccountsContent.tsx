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
import {useEffect, useState} from "react";
import {isAuthenticated} from "../pages/api/auth";
import {getAllAccounts} from "../pages/api/mxClient";
import { parseAccounts } from '../helpers/modelParsers';

const theme = createTheme();

interface AccountProps {
    checkingAccounts: Account[];
    savingsAccounts: Account[];
}

function Content(props: AccountProps) {
    const allAccounts = props.checkingAccounts.concat(props.savingsAccounts)

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
                        {props.checkingAccounts.length > 0 ? `$${props.checkingAccounts.reduce((sum, account) => sum + account.availableBalance, 0)}` : "$0"}
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
                        {props.savingsAccounts.length > 0 ? `$${props.savingsAccounts.reduce((sum, account) => sum + account.availableBalance, 0)}` : "$0"}
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
                        {allAccounts.length > 0 ? `$${Math.round(allAccounts.reduce((sum, current) => sum + current.availableBalance, 0) * 100) / 100}` : "$0"}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </main>
    </ThemeProvider>;
}

export default function AccountsContent() {

    const [checkingAccounts, setCheckingAccounts] = React.useState<Account[]>([])
    const [savingsAccounts, setSavingsAccounts] = React.useState<Account[]>([])

    useEffect(()=>{
        const fetchAccounts = async () => {
            const userGuid = isAuthenticated().user.mxId
            const accounts = await getAllAccounts(userGuid)
            return parseAccounts(accounts.response)
        }
        fetchAccounts().then(accounts => {
            const checking = accounts.filter(account => account.type === AccountType.CHECKING)
            const savings = accounts.filter(account => account.type === AccountType.SAVINGS)
            setCheckingAccounts([...checking])
            setSavingsAccounts([...savings])
        })
    }, []);

    return <Content checkingAccounts={checkingAccounts} savingsAccounts={savingsAccounts}/>;
}
