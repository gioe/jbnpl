import * as React from 'react';
import {Membership, Transaction} from "../helpers/types";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import TransactionCard from "./TransactionCard";
import {TopLevelTransactionCategory, TransactionCategory} from '../helpers/transactionEnums'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {useEffect} from "react";
import {isAuthenticated} from "../pages/api/auth";
import {getAllTransactions} from "../pages/api/mxClient";
import {parseTransactions} from "../helpers/modelParsers";

const theme = createTheme();

const badTopLevelCategories = [
    TopLevelTransactionCategory.TRANSFER,
    TopLevelTransactionCategory.INCOME,
    TopLevelTransactionCategory.GIFTS_AND_DONATIONS,
]

const badCategories = [
    TransactionCategory.CHARITY,
    TransactionCategory.CHECK,
]

interface TransactionsProps {
    transactions: Transaction[];
}

type TransactionCategoryCollection = {
    name: string;
    transactions: Transaction[];
}

function Content(props: TransactionsProps) {

    let categories: TransactionCategoryCollection[] = []
    const validTransactions = props.transactions.filter(value => !badTopLevelCategories.includes(value.topLevelCategory) && !badCategories.includes(value.category))
    validTransactions.forEach(transaction => {
        if (categories.filter(value => value.name == transaction.category).length > 0) {
            const index = categories.findIndex(value => value.name == transaction.category)
            const transactionCategory = categories[index]
            const newTransactions = transactionCategory.transactions.concat([transaction])
            transactionCategory.transactions = newTransactions
        } else {
            const category = {
                name: transaction.category,
                transactions: [transaction]
            } as TransactionCategoryCollection
            categories.push(category)
        }
    })
    categories.sort((a, b) => {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    })

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <Box>
            {categories.length > 0 ? categories.map((transactionCollection) => (
                <Accordion key={transactionCollection.name}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{transactionCollection.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {transactionCollection.transactions.length > 0 ? transactionCollection.transactions.map((transaction) => (
                                <TransactionCard key={transaction.guid} transaction={transaction} />
                            )) : <></> }
                        </AccordionDetails>
                    </Accordion>
            )) : <></> }
        </Box>
    </ThemeProvider>;
}

export default function TransactionsContent() {

    const [transactions, setTransactions] = React.useState<Transaction[]>([])

    useEffect(()=>{
        const fetchTransactions = async () => {
            const userGuid = isAuthenticated().user.mxId
            const transactions = await getAllTransactions(userGuid, 1)
            return parseTransactions(transactions.response)
        }
        fetchTransactions().then(transactions => {
            setTransactions(transactions)
        })
    }, []);


    return <Content transactions={transactions}/>;
}
