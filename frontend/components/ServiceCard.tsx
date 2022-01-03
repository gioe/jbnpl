import * as React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Service } from '../helpers/types';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';


interface ServiceCardProps {
    service: Service;
    isSelected: boolean;
    onSelect: (selection: Service) => void;
}

export default function ServiceCard({service, isSelected, onSelect}: ServiceCardProps) {

    const [checked, setChecked] = React.useState(isSelected);
    const [label, setLabel] = React.useState(isSelected ? "On" : "Off");

    function handleChange() {
        onSelect(service)
        setChecked(!checked)
        if (checked) {
            setLabel("Off")
        } else {
            setLabel("On")
        }
    }

    return (
        <Grid item key={service.name} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {service.name}
                    </Typography>
                    <FormControl component="fieldset" variant="standard">
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch checked={checked} onChange={handleChange} name={service.name} />
                                }
                                label={label}
                                style={{alignItems: "center"}}
                            />
                        </FormGroup>
                    </FormControl>
                </CardContent>
            </Card>
        </Grid>
    );
}
