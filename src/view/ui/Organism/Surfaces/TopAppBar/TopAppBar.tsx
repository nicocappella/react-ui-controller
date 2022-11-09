import { AppBar, Toolbar } from '@mui/material';
import { Box } from '@mui/system';

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
        <AppBar
            position={props.position ? props.position : 'fixed'}
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
                    {props.navButtons && props.navButtons.map((d, i) => <div key={`navButton-${i}`}>{d.component}</div>)}
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {props.otherButtons && props.otherButtons.map((d, i) => <div key={`otherButtons-${i}`}>{d.component}</div>)}
                </Box>
            </Box>
            <Toolbar></Toolbar>
        </AppBar>
    );
};

export { TopAppBar };
