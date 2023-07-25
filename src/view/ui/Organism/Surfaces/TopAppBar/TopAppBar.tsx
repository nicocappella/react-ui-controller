import { Menu } from '@mui/icons-material';
import { AppBar, AppBarProps, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { IconButton } from '../../../Atoms';
import { Tabs } from '../../../Molecules';
import { RemoveFields } from '../../../../../utils/types/generic';


export interface ITopAppBar {
    alignNavBar?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between' | 'space-evenly';
    background?: string | { default: string; active: string };
    boxShadow?: string;
    height?: string | number;
    logo?: { component: React.ReactNode };
    handleActiveAppBar?: (value: boolean) => void;
    horizontalPadding?: string | number;
    menuButton?: boolean;
    navButtons?: { component: React.ReactNode | string }[];
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky';
    otherButtons?: { component: React.ReactNode | string }[];
    tabs?: {
        value: string | number;
        color: string | { default: string; active: string };
        components: { components: React.ReactNode | React.ReactNode[]; value: string }[];
    };
    toolbar?: boolean;
}

const TopAppBar = ({
    alignNavBar = 'space-between',
    background = 'transparent',
    boxShadow,
    handleActiveAppBar,
    height = '64px',
    horizontalPadding = '64px',
    menuButton,
    logo,
    navButtons,
    position = 'fixed',
    otherButtons,
    tabs,
    toolbar = true,
    ...props
}: ITopAppBar & AppBarProps) => {
    const [activeTabs, setActiveTabs] = React.useState(false);
    const activeBg = activeTabs ? 'active' : 'default';
    return (
        <AppBar {...props} position={position} sx={{ background: 'transparent', boxShadow: 'none', zIndex: 1000 }}>
            <Box
                component="nav"
                display="flex"
                justifyContent={alignNavBar}
                sx={{
                    height,
                    background: typeof background === 'string' ? background : background[activeBg],
                    boxShadow: boxShadow,
                    paddingLeft: horizontalPadding,
                    paddingRight: horizontalPadding,
                    transition: 'background ease 1s',
                }}
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
                        textColor={typeof tabs.color === 'string' ? tabs.color : tabs.color[activeBg]}
                        indicatorColor={typeof tabs.color === 'string' ? tabs.color : tabs.color[activeBg]}
                        panel={tabs.components}
                        contentPosition="absolute"
                        appBarHeight={height}
                        handleValue={(value) => {
                            setActiveTabs(Boolean(value));
                            if (handleActiveAppBar) {
                                handleActiveAppBar(Boolean(value));
                            }
                        }}
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
            {toolbar && <Toolbar></Toolbar>}
        </AppBar>
    );
};

export { TopAppBar };
