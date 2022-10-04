import { Menu } from '@mui/icons-material';
import { IconButton, styled, Toolbar, Typography } from '@mui/material';
import { Button } from '../../../Atoms/Inputs/Buttons/Button';
import Image from 'next/image';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box } from '@mui/system';

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
    children: React.ReactNode[];
    handleDrawerOpen: () => void;
    logo?: string;
    pageButtons: string[];
    open: boolean;
    showMenu?: boolean;
}

const TopAppBar = (props: IProps) => {
    return (
        <AppBarSurface position="fixed" open={props.open}>
            <Box component="nav" sx={{ maxHeight: 64 }}>
                <Box component="div">{props.logo && <Image src={props.logo} height="64px" width="100%" />}</Box>
                <Box>{props.pageButtons && props.pageButtons.map((d, i) => <Button variant="outlined" type="button" text={d} />)}</Box>
            </Box>
            <Toolbar></Toolbar>
        </AppBarSurface>
    );
};

export { TopAppBar };
