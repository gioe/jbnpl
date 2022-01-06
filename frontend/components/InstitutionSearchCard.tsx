import React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { Institution } from '../helpers/types';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

interface InstitutionSearchCardProps {
    institution: Institution;
    selectInstitution: (institution: Institution) => void;
}

export default function InstitutionSearchCard({institution, selectInstitution}: InstitutionSearchCardProps) {

    const selectAuthenticate = () => {
        selectInstitution(institution);
    }

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
                    <CardActions>
                        <Button size="small"
                                onClick={selectAuthenticate}>
                            Authenticate</Button>
                    </CardActions>
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
