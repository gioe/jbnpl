import * as React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Service } from '../helpers/integrations';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';

interface CardProps {
    service: Service;
}

export default function Title(props: CardProps) {

    const [checked, setChecked] = React.useState(false);
    const [label, setLabel] = React.useState("Off");

    function handleChange() {
        setChecked(!checked)
        if (checked) {
            setLabel("Off")
        } else {
            setLabel("On")
        }
    }

    return (
        <Grid item key={props.service.name} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.service.name}
                    </Typography>
                </CardContent>
                <FormControl component="fieldset" variant="standard">
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch checked={checked} onChange={handleChange} name={props.service.name} />
                            }
                            label={label}
                            style={{alignItems: "center"}}
                        />
                    </FormGroup>
                </FormControl>
            </Card>
        </Grid>
    );
}
