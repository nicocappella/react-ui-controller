import { Toolbar, AppBar } from '@mui/material';
import { Box } from '@mui/system';
import { Tabs } from '../../../Molecules';

export interface ITopAppBar {
    alignNavBar?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    background?: string;
    boxShadow?: string;
    height?: string | number;
    horizontalPadding?: string | number;
    tabs?: {
        value: string | number;
        color: 'primary' | 'secondary' | undefined;
        components: { components: React.ReactNode | React.ReactNode[]; value: string }[];
    };
    logo?: { component: React.ReactNode };
    otherButtons?: { component: React.ReactNode | string }[];
    navButtons?: { component: React.ReactNode }[];
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    showMenu?: boolean;
}

const TopAppBar = ({
    logo,
    alignNavBar = 'space-between',
    navButtons,
    otherButtons,
    showMenu,
    tabs,
    background = 'transparent',
    boxShadow,
    position = 'fixed',
    horizontalPadding = '64px',
    height = '64px',
    ...props
}: ITopAppBar) => {
    return (
        <AppBar {...props} position={position} sx={{ background: 'transparent', boxShadow: 'none' }}>
            <Box
                component="nav"
                display="flex"
                justifyContent={alignNavBar}
                sx={{ height, background: background, boxShadow: boxShadow, paddingLeft: horizontalPadding, paddingRight: horizontalPadding }}
                alignItems="center"
            >
                {logo && <Box component="div">{logo?.component}</Box>}
                {navButtons && tabs ? (
                    <Tabs
                        centered
                        tabs={navButtons.map((d, i) => ({
                            label: d.component as string,
                            value: i,
                        }))}
                        value={tabs.value}
                        color={tabs.color}
                        panel={tabs.components}
                    />
                ) : (
                    navButtons &&
                    !tabs && (
                        <Box display="grid" gap="40px" sx={{ gridGap: '40px', gridTemplateColumns: `repeat(${navButtons.length}, auto)` }}>
                            {navButtons && navButtons.map((d, i) => <Box key={`navButton-${i}`}>{d.component}</Box>)}
                        </Box>
                    )
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
