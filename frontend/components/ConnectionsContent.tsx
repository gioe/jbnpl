import React, {useEffect} from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MembershipCard from "./MembershipCard";
import {
    Account,
    Membership,
} from "../helpers/types";
import {isAuthenticated} from "../pages/api/auth";
import {refreshMemberships} from "../pages/api/mxClient";
import {parseMemberships} from "../helpers/modelParsers";

const theme = createTheme();

interface Props {
    memberships: Membership[];
}

const Content: React.FC<Props> = (props) => {

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <Box>
            {props.memberships.length > 0 ? props.memberships.map((membership) => (
                <MembershipCard key={membership.guid} membership={membership} />
            )) : <></>}
        </Box>
    </ThemeProvider>;
}

export default function ConnectionsContent() {
    const [memberships, setMemberships] = React.useState<Membership[]>([])

    useEffect(()=>{
        const fetchMemberships = async () => {
            const userGuid = isAuthenticated().user.mxId
            const memberships = await refreshMemberships(userGuid)
            return parseMemberships(memberships)
        }
        fetchMemberships().then(memberships => {
            setMemberships(memberships)
        })
    }, []);

    return <Content memberships={memberships}/>;
}
