import React, {SyntheticEvent, } from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {
    Event, Payment,
} from "../helpers/types";
import Toolbar from "@mui/material/Toolbar";
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import addHours from 'date-fns/addHours'
import startOfHour from 'date-fns/startOfHour'
import {
    Calendar,
    dateFnsLocalizer,
} from 'react-big-calendar';
import PaymentInfoInput from "./PaymentInfoInput";

const locales = {
    'en-US': enUS,
}

interface ScheduleProps {
    events: Event[];
    payments: Payment[]
}


const endOfHour = (date: Date): Date => addHours(startOfHour(date), 1)
const now = new Date()
const start = endOfHour(now)
const end = addHours(start, 2)
// The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

const theme = createTheme();
export type stringOrDate = string | Date;

function Content(props: ScheduleProps) {

    const [value, onChange] = React.useState(new Date());
    const [showEditDialog, setShouldShowEditDialog] = React.useState(false)
    const [payment, setPayment] = React.useState<Payment | null>(null)

    const [open, setOpen] = React.useState(false);

    const handleCloseModal = () => {
        setShouldShowEditDialog(false)
        setOpen(false);
    }

    const selectedEvent = (event: Event, e: SyntheticEvent) => {
        const payment = props.payments.filter(payment => payment.description == event.title && payment.transactedAt == event.start )[0]
        setPayment(payment)
        setOpen(true);
        setShouldShowEditDialog(true)
    }

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <Calendar
            popup={true}
            views={['month']}
            events={props.events}
            localizer={localizer}
            onSelectEvent={selectedEvent}
            style={{ height: '100vh', width: '100%' }}
        />
        <div>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                }}>
                    <PaymentInfoInput payment={payment} handleCloseModal={handleCloseModal}/>
                </Box>
            </Modal>
        </div>
    </ThemeProvider>;
}

export default function ScheduleContent(props: ScheduleProps) {
    return <Content events={props.events} payments={props.payments}/>;
}
