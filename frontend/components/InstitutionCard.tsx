import React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { Service, Institution } from '../helpers/types';

interface InstitutionCardProps {
    institution: Institution;
}

export default function InstitutionCard({institution}: InstitutionCardProps) {

    return (
        <Grid item key={institution.name} xs={12} sm={6} md={4}>
            <Card sx={{ display: 'flex' }}>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {institution.name}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={institution.logoUrlMedium}
                    alt={institution.code}
                />
            </Card>
        </Grid>
    );
}
