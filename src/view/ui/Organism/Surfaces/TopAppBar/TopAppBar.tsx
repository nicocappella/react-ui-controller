import { Menu } from '@mui/icons-material';
import { IconButton, styled, Toolbar, Typography } from '@mui/material';
import { Button } from '../../../Atoms/Inputs/Buttons/Button';
import Image from 'next/image';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;

const AppBarSurface = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex?.drawer + 1,
    padding: '0 16px',
    maxHeight: 64,
    display: 'flex',
    justifyContent: 'space-between',
    transition: theme.transitions?.create(['width', 'margin'], {
        easing: theme.transitions?.easing.sharp,
        duration: theme.transitions?.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions?.create(['width', 'margin'], {
            easing: theme.transitions?.easing.sharp,
            duration: theme.transitions?.duration.enteringScreen,
        }),
    }),
}));

export interface IProps {
    handleDrawerOpen: () => void;
    logo?: string;
    navButtons?: { component: React.ReactNode }[];
    otherButtons?: { component: React.ReactNode }[];
    open: boolean;
    showMenu?: boolean;
    background?: string;
    boxShadow?: string;
}

const TopAppBar = (props: IProps) => {
    return (
        <AppBarSurface position="fixed" open={props.open} sx={{ background: props.background, boxShadow: props.boxShadow }}>
            <Box component="nav" display="flex" justifyContent="space-between" sx={{ maxHeight: 64 }}>
                <Box component="div">{props.logo && <Image src={props.logo} height="64px" width="100%" />}</Box>
                <Box display="flex" justifyContent="space-evenly">
                    {props.navButtons && props.navButtons.map((d, i) => d.component)}
                </Box>
                <Box>{props.otherButtons && props.otherButtons.map((d, i) => d.component)}</Box>
            </Box>
            <Toolbar></Toolbar>
        </AppBarSurface>
    );
};

export { TopAppBar };
