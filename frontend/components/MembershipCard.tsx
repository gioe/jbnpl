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

    const [syncing, setSyncing] = React.useState(false);

    const aggregate = () => {
        setSyncing(true)
        aggregateMembership(membership.userGuid, membership.guid)
            .then(data => {
                console.log(data)
                setSyncing(false)
            })
    }

    const handleMultifactorAuth = () => {
        onMultifactorAuth(membership)
    }

    const authenticate = () => {
        onAuthenticate(membership)
    }

    const mapConnectionStatus = (membership: Membership) => {
        console.log(membership.connectionStatus)
        switch (membership.connectionStatus) {
            case ConnectionStatus.CHALLENGED:
                return "2FA Required"
            case ConnectionStatus.CONNECTED:
                return "OK"
            default:
                return membership.isAuthenticated ? "Authentication Failed" : membership.connectionStatus
        }
    }

    const connectionCta = (membership: Membership) => {
        switch (membership.connectionStatus) {
            case ConnectionStatus.CHALLENGED:
                return <Button
                    onClick={handleMultifactorAuth}
                    variant="outlined">
                    2FA
                </Button>
            default:
                return membership.isAuthenticated ? <Button
                onClick={authenticate}
                variant="outlined">
                Authenticate
                </Button> : <></>
        }
    }

    const determineSyncDate = (lastSyncDate: string) => {
        if (lastSyncDate == null) {
            return "Never"
        } else {
            const syncDate = lastSyncDate
            const convertedDate = new Date(syncDate);
            return convertedDate.toDateString()
        }
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
                            Bank Connection Status: {mapConnectionStatus(membership)}
                        </Typography>
                        {connectionCta(membership)}
                        <Typography component="div">
                            Bank Data Last Synchronized: {determineSyncDate(membership.successfullyAggregatedAt)}
                        </Typography>
                        <LoadingButton
                            onClick={aggregate}
                            loading={syncing}
                            loadingIndicator="Syncing..."
                            variant="outlined"
                        >
                            Sync Data
                        </LoadingButton>
                    </CardContent>
                </Box>
            </Card>
        </Grid>
    );
}
