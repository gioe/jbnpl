import React from "react";
import {Payment} from "../helpers/types";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const twelvePayments = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const paymentMonths = [2, 6, 12]

const ITEM_NAME_KEY = "itemName"
const TOTAL_COST_KEY = "cost"
const APR_KEY = "apr"
const PAYMENT_AMOUNT_KEY = "payments"
const PAYMENT_NUMBER_KEY = "paymentNumber"
const TOTAL_PAYMENTS_KEY = "totalPayments"

interface AffirmInfoGridProps {
    payment: Payment;
    editPayment: (payment: Payment) => void;
}

function Content({payment, editPayment}: AffirmInfoGridProps) {

    // const handleTextInput = (event: any) => {
    //     const id = event.target.id
    //     const value = event.target.value
    //
    //     switch (id) {
    //         case ITEM_NAME_KEY:
    //             payment.itemName = value
    //             break
    //         case TOTAL_COST_KEY:
    //             payment. = value
    //             setTotalCost(Number(value))
    //             break
    //         case APR_KEY:
    //             setApr(Number(value))
    //             break
    //         default:
    //             break
    //     }
    //     const enableButton = purchaseItemName != "" && totalCost != 0 && totalMonthlyPayments != 0 && apr != 0 && paymentNumber != 0
    //     setButtonDisable(!enableButton)
    // }
    //
    // const handleDropDownChange = (event: any) => {
    //     const id = event.target.id
    //     const value = event.target.value
    //     const numericValue = Number(value)
    //
    //     switch (id) {
    //         case PAYMENT_NUMBER_KEY:
    //             setPaymentNumber(value)
    //             break
    //         case TOTAL_PAYMENTS_KEY:
    //             setTotalMonthlyPayments(value)
    //             break
    //         default:
    //             break
    //     }
    //     setTotalMonthlyPayments(numericValue);
    // };

    return (
        <>
            </>
        // <Grid container spacing={2}>
        //     <Grid item xs={12} sm={6}>
        //         <TextField
        //             name="item"
        //             required
        //             fullWidth
        //             id={ITEM_NAME_KEY}
        //             label="Purchased Item"
        //             onChange={handleTextInput}
        //         />
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //         <TextField
        //             required
        //             fullWidth
        //             type="number"
        //             id={TOTAL_COST_KEY}
        //             label="Total Cost"
        //             name="cost"
        //             onChange={handleTextInput}
        //         />
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //         <FormControl fullWidth>
        //             <InputLabel id="demo-simple-select-label">Payment Number</InputLabel>
        //             <Select
        //                 labelId="paymentNumber"
        //                 id={PAYMENT_NUMBER_KEY}
        //                 value={paymentNumber}
        //                 label="Payment Number"
        //                 onChange={handleDropDownChange}
        //             >
        //                 {twelvePayments.map(value => {
        //                     return <MenuItem key={value} value={value}>{value}</MenuItem>
        //                 })}
        //             </Select>
        //         </FormControl>
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //         <FormControl fullWidth>
        //             <InputLabel id="demo-simple-select-label">Total Monthly Payments</InputLabel>
        //             <Select
        //                 labelId="paymentMonths"
        //                 id={TOTAL_PAYMENTS_KEY}
        //                 value={totalMonthlyPayments}
        //                 label="Total Monthly Payments"
        //                 onChange={handleDropDownChange}
        //             >
        //                 {paymentMonths.map(value => {
        //                     return <MenuItem key={value} value={value}>{value}</MenuItem>
        //                 })}
        //             </Select>
        //         </FormControl>
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //         <TextField
        //             required
        //             disabled
        //             fullWidth
        //             id={PAYMENT_AMOUNT_KEY}
        //             label="Payment Amount"
        //             name="paymentAmount"
        //             type="number"
        //             value={payment?.amount}
        //             onChange={handleTextInput}
        //         />
        //     </Grid>
        //     <Grid item xs={12} sm={6}>
        //         <TextField
        //             required
        //             fullWidth
        //             type="number"
        //             id={APR_KEY}
        //             label="APR"
        //             name="apr"
        //             onChange={handleTextInput}
        //         />
        //     </Grid>
        //     {/*<Grid item xs={12}>*/}
        //     {/*    <LocalizationProvider dateAdapter={AdapterDateFns}>*/}
        //     {/*        <DatePicker*/}
        //     {/*            label="First Payment Date"*/}
        //     {/*            value={firstPaymentDate}*/}
        //     {/*            onChange={handleDateSelection}*/}
        //     {/*            renderInput={(params) => <TextField {...params} />}*/}
        //     {/*        />*/}
        //     {/*    </LocalizationProvider>*/}
        //     {/*</Grid>*/}
        // </Grid>
        )
}

export default function AffirmInputGrid(props: AffirmInfoGridProps) {
    return <Content payment={props.payment} editPayment={props.editPayment}/>;
}
