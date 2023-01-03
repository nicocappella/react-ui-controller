import { Toolbar, AppBar } from '@mui/material';
import { Box } from '@mui/system';

export interface IProps {
    logo?: { component: React.ReactNode };
    navButtons?: { component: React.ReactNode }[];
    alignNavButtons?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    alignOtherButtons?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    otherButtons?: { component: React.ReactNode }[];
    showMenu?: boolean;
    background?: string;
    boxShadow?: string;
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    horizontalPadding?: string | number;
    height?: string | number;
}

const TopAppBar = ({
    logo,
    navButtons,
    alignNavButtons = 'center',
    otherButtons,
    alignOtherButtons = 'center',
    showMenu,
    background = 'transparent',
    boxShadow,
    position = 'fixed',
    horizontalPadding,
    height = 64,
}: IProps) => {
    return (
        <AppBar
            position={position}
            sx={{
                background: background,
                boxShadow: boxShadow,
                paddingLeft: horizontalPadding,
                paddingRight: horizontalPadding,
            }}
        >
            <Box component="nav" display="flex" justifyContent="space-between" sx={{ height }} alignItems="center">
                <Box component="div">{logo?.component}</Box>
                <Box display="flex" justifyContent={alignNavButtons} alignItems="center" gap={5}>
                    {navButtons && navButtons.map((d, i) => <Box key={`navButton-${i}`}>{d.component}</Box>)}
                </Box>
                <Box display="flex" justifyContent={alignOtherButtons} alignItems="center">
                    {otherButtons && otherButtons.map((d, i) => <Box key={`otherButtons-${i}`}>{d.component}</Box>)}
                </Box>
            </Box>
            <Toolbar></Toolbar>
        </AppBar>
    );
};

export { TopAppBar };
