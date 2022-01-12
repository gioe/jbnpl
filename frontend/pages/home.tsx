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
import {Account, Institution, Membership, Transaction} from '../helpers/types';
import {
    searchInstitutions,
    getAllAccounts,
    getAllTransactions,
    refreshMemberships
} from "./api/mxClient";
import ConnectionsContent from "../components/ConnectionsContent";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TransactionsContent from "../components/TransactionsContent";
import { cookiesAreAuthenticated} from "./api/auth";
import { parseMemberships, parseTransactions, parseAccounts } from "../helpers/modelParsers";

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

interface State {
    institutions: Institution[];
}

const initialState: State = {
    institutions: [],
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface ContentProps {
    contentType: string;
    memberships: Membership[];
    accounts: Account[];
    transactions: Transaction[];
    handleFetchedMemberships: (fetchedMemberships: Membership[]) => void;
}

interface HomeProps {
    memberships: Membership[];
    accounts: Account[];
    transactions: Transaction[];
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

    const [institutions, setInstitutions] = React.useState(initialState.institutions)
    const [error, setErrorMessage] = React.useState('');

    const handleSearch = (searchTerm: string) => {
        if (searchTerm == '') {
            setInstitutions([])
        } else {
            searchInstitutions(searchTerm)
                .then(data => {
                    if (data.error) {
                        setErrorMessage(data.error)
                    } else {
                        const membershipKeys = props.memberships.map(membership => {
                            return membership.name
                        })
                        const searchResults = data.results.institutions.map((value: { code: string; name: string; small_logo_url: string; medium_logo_url: string; url: string; supports_account_identification: boolean; supports_account_statement: boolean; supports_account_verification: boolean; supports_oauth: boolean; supports_transaction_history: boolean; }) => {
                            return {
                                code: value.code,
                                name: value.name,
                                logoUrlSmall: value.small_logo_url,
                                logoUrlMedium: value.medium_logo_url,
                                url: value.url,
                                supportsAccountIdentification: value.supports_account_identification,
                                supportsAccountStatement: value.supports_account_statement,
                                supportsAccountVerification: value.supports_account_verification,
                                supportsOauth: value.supports_oauth,
                                supportsTransactionHistory: value.supports_transaction_history,
                            }
                        }).filter((value: { name: string; }) => {
                            return !membershipKeys.includes(value.name)
                        })

                        setInstitutions([...searchResults])
                    }
                })
        }
    }

    switch (props.contentType) {
        case "Connections":
            return <ConnectionsContent memberships={props.memberships}/>
        case "Search":
            return <SearchContent searchResults={institutions} onSearch={handleSearch} handleFetchedMemberships={props.handleFetchedMemberships}/>
        case "Accounts":
            return <AccountsContent accounts={props.accounts} />
        case "Transactions":
            return <TransactionsContent transactions={props.transactions} />
        default:
            return <> </>;
    }
}

const Home = (props: HomeProps) => {
    const [open, setOpen] = React.useState(true);
    const [contentType, setContentType] = React.useState("Search");
    const [memberships, setMemberships] = React.useState(props.memberships)
    const [accounts, setAccounts] = React.useState(props.accounts)
    const [transactions, setTransactions] = React.useState(props.transactions)

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleFetchedMemberships = (memberships: Membership[]) => {
        setContentType("Integrations")
        setMemberships([...memberships])
    }

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
                    <Content
                        contentType={contentType}
                        memberships={memberships}
                        accounts={accounts}
                        transactions={transactions}
                        handleFetchedMemberships={handleFetchedMemberships}/>
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
    const fetchedMemberships = await refreshMemberships(mxId)
    const fetchedAccounts = await getAllAccounts(mxId)
    const fetchedTransactions = await getAllTransactions(mxId, 1)
    return {
        props: {
            memberships: parseMemberships(fetchedMemberships),
            accounts: parseAccounts(fetchedAccounts.response),
            transactions: parseTransactions(fetchedTransactions.response),
        },
    };
};
