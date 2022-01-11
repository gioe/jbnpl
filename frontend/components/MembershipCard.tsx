import React from "react";
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {CredentialRequest, Membership} from '../helpers/types';
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import {aggregateMembership} from "../pages/api/mxClient";
import {ConnectionStatus} from "../helpers/userEnums";


interface MembershipCardProps {
    membership: Membership;
    onMultifactorAuth: (membership: Membership) => void;
    onAuthenticate: (membership: Membership) => void;
}

export default function MembershipCard({membership, onMultifactorAuth, onAuthenticate}: MembershipCardProps) {

    const [loading, setLoading] = React.useState(false);

    const aggregate = () => {
        setLoading(true)
        aggregateMembership(membership.userGuid, membership.guid)
            .then(data => {
                setLoading(false)
            })
    }

    const handleMultifactorAuth = () => {
        onMultifactorAuth(membership)
    }

    const authenticate = () => {
        onAuthenticate(membership)
    }

    return (
        <Grid item key={membership.name}>
            <Card sx={{ display: 'flex' }}>
                <Box>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div">
                            {membership.name}
                        </Typography>
                        <Typography component="div">
                            Connection Status: {membership.connectionStatus}
                        </Typography>
                        {membership.connectionStatus == ConnectionStatus.CREATED ?
                            <Button
                                onClick={handleMultifactorAuth}
                                variant="outlined">
                                2FA
                            </Button> : <></>
                        }
                        <Typography component="div">
                            Is Being Aggregated: {membership.isBeingAggregated ? "Yes" : "No"}
                        </Typography>
                        {!membership.isBeingAggregated ?
                            <LoadingButton
                                onClick={aggregate}
                                loading={loading}
                                loadingIndicator="Aggregating..."
                                variant="outlined">
                                Aggregate
                            </LoadingButton> : <></>
                        }
                        <Typography component="div">
                            Is Authenticated: {membership.isAuthenticated ? "Yes" : "No"}
                        </Typography>
                        { !membership.isAuthenticated ?
                            <Button variant="outlined" onClick={authenticate}>
                                Authenticate
                            </Button>: <></>
                        }
                        <Typography component="div">
                            Successfully Aggregated At: {membership.successfullyAggregatedAt == null ? "Never" : membership.successfullyAggregatedAt}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
}
