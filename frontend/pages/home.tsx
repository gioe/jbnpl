import React from "react";
import { GetServerSideProps } from 'next'
import AccountsContent from '../components/AccountsContent';
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
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import {ListItem, ListItemIcon, ListItemText} from "@mui/material";
import SearchContent from '../components/SearchContent';
import ConnectionsContent from "../components/ConnectionsContent";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TransactionsContent from "../components/TransactionsContent";
import { cookiesAreAuthenticated} from "./api/auth";
import Head from 'next/head'

interface ContentProps {
    contentType: string;
}
const menuItems = [
    {
        text: "Search",
        icon: <SearchIcon />,
    },
    {
        text: "Transactions",
        icon: <AttachMoneyIcon />,
    },
    {
        text: "Accounts",
        icon: <AccountBalanceIcon />,
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
        case "Accounts":
            return <AccountsContent />
        case "Transactions":
            return <TransactionsContent />
        default:
            return <> </>;
    }
}

const Home = () => {
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
                <Box>
                    <Content contentType={contentType}/>
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

    return {
        props:{},
    };
};
