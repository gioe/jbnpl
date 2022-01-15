import React from "react";
import { GetServerSideProps } from 'next'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LayersIcon from "@mui/icons-material/Layers";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SearchContent from '../components/SearchContent';
import ConnectionsContent from "../components/ConnectionsContent";
import ScheduleContent from "../components/ScheduleContent";
import LoanContent from "../components/LoanContent";
import { cookiesAreAuthenticated} from "./api/auth";
import {parsePayments} from "../helpers/modelParsers";
import {getAllPayments} from "./api/mxClient";
import { Event, Payment} from '../helpers/types';

interface ContentProps {
    contentType: string;
    payments: Payment[];
    events: Event[];
}

const menuItems = [
    {
        text: "Search",
        icon: <SearchIcon />,
    },
    {
        text: "Schedule",
        icon: <CalendarTodayIcon />,
    },
    {
        text: "Loans",
        icon: <AttachMoneyIcon />,
    },
    {
        text: "Connections",
        icon: <LayersIcon />,
    },
]

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function Content(props: ContentProps) {

    switch (props.contentType) {
        case "Connections":
            return <ConnectionsContent />
        case "Search":
            return <SearchContent />
        case "Loans":
            return <LoanContent payments={props.payments}/>
        case "Schedule":
            return <ScheduleContent events={props.events} payments={props.payments}/>
        default:
            return <> </>;
    }
}


interface HomeProps {
    payments: Payment[]
    events: Event[];
}

const Home = (props: HomeProps) => {
    const [open, setOpen] = React.useState(true);
    const [contentType, setContentType] = React.useState("Search");

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            {contentType}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>
                        {menuItems.map(item => (
                            <ListItem button
                                      key={item.text}
                                      onClick={() => {
                                          setContentType(item.text)
                                      }}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Box sx={{ flexGrow: 1 }}>
                    <Content
                        contentType={contentType}
                        payments={props.payments}
                        events={props.events}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const authenticated = cookiesAreAuthenticated(context)

    if (!authenticated) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props:{},
        };
    }

    const mxId = JSON.parse(context.req.cookies.jwt).user.mxId
    const fetchedPayments = await getAllPayments(mxId, 1)
    const parsedProps = parsePayments(fetchedPayments)

    return {
        props: {
            payments: parsedProps.payments,
            events: parsedProps.events
        },
    };
};
