import React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Membership } from '../helpers/types';

interface MembershipCardProps {
    membership: Membership;
}

export default function MembershipCard({membership}: MembershipCardProps) {

    return (
        <Grid item key={membership.name}>
            <Card sx={{ display: 'flex' }}>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {membership.name}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
}
