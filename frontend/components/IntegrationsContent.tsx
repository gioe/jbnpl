import React from "react";
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MembershipCard from "./MembershipCard";
import {Membership} from "../helpers/types";

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
                <MembershipCard key={membership.name} membership={membership} />
            )) : <></>}
        </Box>
    </ThemeProvider>;
}

export default function IntegrationsContent(props: Props) {
    return <Content memberships={props.memberships}/>;
}
