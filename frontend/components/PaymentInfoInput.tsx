import React from "react";
import Box from '@mui/material/Box';
import { Payment } from '../helpers/types';
import LoadingButton from "@mui/lab/LoadingButton";
import {submitPaymentInfo} from "../pages/api/mxClient";
import Button from '@mui/material/Button';
import AffirmInputGrid from "./AffirmInputGrid";

interface PaymentInfoInputProps {
    payment: Payment | null;
    handleCloseModal: () => void;
}

function infoGridForLender(payment: Payment | null, editPayment: (payment: Payment) => void) {
    if (payment != null) {
        switch (payment.lender) {
            default:
                return <AffirmInputGrid payment={payment} editPayment={editPayment}/>
        }
    }
}

export default function PaymentInfoInput({payment, handleCloseModal}: PaymentInfoInputProps) {

    const [submitting, setSubmitting] = React.useState(false)
    const [buttonDisabled, setButtonDisable] = React.useState(true)
    const [editedPayment, setEditedPayment] = React.useState(payment)

    // const [firstPaymentDate, setFirstPaymentDate] = React.useState<string | null>(null);

    const closeModal = () => {
        handleCloseModal()
    }

    const updatePayment = (payment: Payment) => {
        setEditedPayment(payment)
    }

    // const handleDateSelection = (newValue: any) => {
    //     setFirstPaymentDate(newValue)
    // }

    const submit = () => {
        setSubmitting(true)
        if (payment != null) {
            submitPaymentInfo(payment)
                .then(data => {
                    console.log(data.reponse)
                })
        }
    }

    return (
        <Box sx={{ mt: 3 }}>
            {infoGridForLender(payment, updatePayment)}
            <LoadingButton sx={{ mt: 3 }}
                           onClick={submit}
                           loading={submitting}
                           loadingIndicator="Saving..."
                           variant="contained"
                           disabled={buttonDisabled}
                           fullWidth>
                Submit
            </LoadingButton>
            <Button sx={{ mt: 3 }}
                           onClick={closeModal}
                           variant="contained"
                           fullWidth>
                Close
            </Button>
        </Box>
    );
}
