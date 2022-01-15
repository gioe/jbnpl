import React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from '@mui/material/CardHeader';
import { Payment } from '../helpers/types';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

interface TransactionCardProps {
    payment: Payment;
    handlePaymentEdit: (payment: Payment) => void;
}

export default function PaymentCard({payment, handlePaymentEdit}: TransactionCardProps) {

    const determinePaymentDate = (paymentDate: string) => {
        const syncDate = paymentDate
        const convertedDate = new Date(syncDate);
        return convertedDate.toDateString()
    }

    const showInformationalDialog = () => {
        handlePaymentEdit(payment)
    }

    return (
        <Grid item key={payment.description}>
            <Card sx={{ display: 'flex' }}>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    A
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings" onClick={showInformationalDialog}>
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title={payment.description}
                            subheader={determinePaymentDate(payment.transactedAt)}
                        />
                        <Typography component="div">
                            ${payment.amount}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
}
