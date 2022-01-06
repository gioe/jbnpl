import React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Transaction } from '../helpers/types';

interface TransactionCardProps {
    transaction: Transaction;
}

export default function TransactionCard({transaction}: TransactionCardProps) {

    return (
        <Grid item key={transaction.description}>
            <Card sx={{ display: 'flex' }}>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {transaction.amount}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
}
