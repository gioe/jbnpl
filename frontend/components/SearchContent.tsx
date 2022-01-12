import React, { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {getConnectWidget} from "../pages/api/mxClient";
import {isAuthenticated} from "../pages/api/auth";

const theme = createTheme();

interface SearchContentProps {
    widgetUrl: string;
}

function Content(props: SearchContentProps) {
    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
            </Toolbar>
        </AppBar>
        <Container sx={{ py: 8 }}>
            <iframe height={600} width={600} src={props.widgetUrl}>
            </iframe>
        </Container>
    </ThemeProvider>;
}

export default function SearchContent() {

    const [widgetUrl, setWidgetUrl] = useState("")

    useEffect(()=>{
        const fetchWidgetUrl = async () => {
            const userGuid = isAuthenticated().user.mxId
            const widgetResponse = await getConnectWidget(userGuid)
            return widgetResponse.response.widget_url.url
        }
        fetchWidgetUrl().then(url => {
            setWidgetUrl(url)
        })
    }, []);

    return <Content widgetUrl={widgetUrl} />;
}
