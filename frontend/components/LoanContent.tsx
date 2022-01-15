import * as React from 'react';
import {Payment} from "../helpers/types";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import PaymentCard from "./PaymentCard";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Modal from 'react-modal';
import PaymentInfoInput from "./PaymentInfoInput";

const theme = createTheme();

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

interface PaymentProps {
    payments: Payment[];
}

type PaymentCategoryCollection = {
    name: string;
    payments: Payment[];
}

function Content(props: PaymentProps) {

    const [showEditDialog, setShouldShowEditDialog] = React.useState(false)
    const [payment, setPayment] = React.useState<Payment | null>(null)

    const handlePaymentEdit = (transaction: Payment) => {
        setPayment(transaction)
        setShouldShowEditDialog(true)
    }

    const closeModal = () => {
        setShouldShowEditDialog(false)
    }

    let categories: PaymentCategoryCollection[] = []
    props.payments.forEach(payment => {
        if (categories.filter(value => value.name == payment.category).length > 0) {
            const index = categories.findIndex(value => value.name == payment.category)
            const paymentCategory = categories[index]
            const newPayments = paymentCategory.payments.concat([payment])
            paymentCategory.payments = newPayments
        } else {
            const category = {
                name: payment.category,
                payments: [payment]
            } as PaymentCategoryCollection
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
        <Modal
            isOpen={showEditDialog}
            style={customStyles}
            ariaHideApp={false}
        >
            <PaymentInfoInput payment={payment} handleCloseModal={closeModal} />
        </Modal>
        <Box>
            {categories.length > 0 ? categories.map((paymentCollection) => (
                <Accordion key={paymentCollection.name}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{paymentCollection.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {paymentCollection.payments.length > 0 ? paymentCollection.payments.map((payment) => (
                                <PaymentCard key={payment.guid} payment={payment} handlePaymentEdit={handlePaymentEdit}/>
                            )) : <></> }
                        </AccordionDetails>
                    </Accordion>
            )) : <></> }
        </Box>
    </ThemeProvider>;
}

export default function LoanContent(props: PaymentProps) {
    return <Content payments={props.payments}/>;
}
