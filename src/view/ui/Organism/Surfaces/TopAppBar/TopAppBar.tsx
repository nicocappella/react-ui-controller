import { Menu } from '@mui/icons-material';
import { AppBar, AppBarProps, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { IconButton } from '../../../Atoms';
import { Tabs } from '../../../Molecules';

export interface ITopAppBar {
    alignNavBar?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    background?: string;
    backgroundActiveTabs: string;
    boxShadow?: string;
    height?: string | number;
    logo?: { component: React.ReactNode };
    horizontalPadding?: string | number;
    menuButton?: boolean;
    navButtons?: { component: React.ReactNode | string }[];
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    otherButtons?: { component: React.ReactNode | string }[];
    tabs?: {
        value: string | number;
        color: 'primary' | 'secondary' | undefined;
        components: { components: React.ReactNode | React.ReactNode[]; value: string }[];
    };
}

const TopAppBar = ({
    alignNavBar = 'space-between',
    background = 'transparent',
    backgroundActiveTabs = 'white',
    boxShadow,
    height = '64px',
    horizontalPadding = '64px',
    menuButton,
    logo,
    navButtons,
    position = 'fixed',
    otherButtons,
    tabs,
    ...props
}: ITopAppBar & AppBarProps) => {
    return (
        <AppBar {...props} position={position} sx={{ background: 'transparent', boxShadow: 'none', zIndex: 1000 }}>
            <Box
                component="nav"
                display="flex"
                justifyContent={alignNavBar}
                sx={{ height, background, boxShadow: boxShadow, paddingLeft: horizontalPadding, paddingRight: horizontalPadding }}
                alignItems="center"
                position="relative"
                zIndex={999}
            >
                {logo && <Box component="div">{logo?.component}</Box>}
                {menuButton && (
                    <IconButton>
                        <Menu />
                    </IconButton>
                )}
                {navButtons && tabs ? (
                    <Tabs
                        centered
                        tabs={navButtons.map((d, i) => ({
                            label: d.component as string,
                            value: i.toString(),
                        }))}
                        value={tabs.value}
                        textColor={tabs.color}
                        indicatorColor={tabs.color}
                        panel={tabs.components}
                        contentPosition="absolute"
                        appBarHeight={height}
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
