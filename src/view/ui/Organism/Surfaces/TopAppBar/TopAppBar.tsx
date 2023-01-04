import { Toolbar, AppBar } from '@mui/material';
import { Box } from '@mui/system';

export interface IProps {
    logo?: { component: React.ReactNode };
    alignNavBar?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    navButtons?: { component: React.ReactNode }[];
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
    alignNavBar = 'space-between',
    navButtons,
    otherButtons,
    showMenu,
    background = 'transparent',
    boxShadow,
    position = 'fixed',
    horizontalPadding = 100,
    height = 64,
}: IProps) => {
    return (
        <AppBar position={position} sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Box
                component="nav"
                display="flex"
                justifyContent={alignNavBar}
                sx={{ height, background: background, boxShadow: boxShadow, paddingLeft: horizontalPadding, paddingRight: horizontalPadding }}
                alignItems="center"
            >
                {logo && <Box component="div">{logo?.component}</Box>}
                {navButtons && (
                    <Box display="flex"  alignItems="center" gap={5}>
                        {navButtons && navButtons.map((d, i) => <Box key={`navButton-${i}`}>{d.component}</Box>)}
                    </Box>
                )}
                {otherButtons && (
                    <Box display="flex" alignItems="center">
                        {otherButtons && otherButtons.map((d, i) => <Box key={`otherButtons-${i}`}>{d.component}</Box>)}
                    </Box>
                )}
            </Box>
            <Toolbar></Toolbar>
        </AppBar>
    );
};

export { TopAppBar };
