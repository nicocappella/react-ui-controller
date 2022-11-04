import { styled, Toolbar } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box } from '@mui/system';
import Image from 'next/image';

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
    handleDrawerOpen?: () => void;
    logo?: { component: React.ReactNode };
    navButtons?: { component: React.ReactNode }[];
    otherButtons?: { component: React.ReactNode }[];
    open?: boolean;
    showMenu?: boolean;
    background?: string;
    boxShadow?: string;
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    horizontalPadding?: string | number;
}

const TopAppBar = (props: IProps) => {
    return (
        <AppBarSurface
            position={props.position ? props.position : 'fixed'}
            open={props.open ? props.open : false}
            sx={{
                background: props.background,
                boxShadow: props.boxShadow,
                paddingLeft: props.horizontalPadding,
                paddingRight: props.horizontalPadding,
            }}
        >
            <Box component="nav" display="flex" justifyContent="space-between" sx={{ maxHeight: 64 }} alignItems="center">
                <Box component="div">{props.logo?.component}</Box>
                <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                    {props.navButtons && props.navButtons.map((d, i) => d.component)}
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {props.otherButtons && props.otherButtons.map((d, i) => d.component)}
                </Box>
            </Box>
            <Toolbar></Toolbar>
        </AppBarSurface>
    );
};

export { TopAppBar };
