import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Drawer as MuiDrawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft, ChevronRight, Inbox, Mail } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const DrawerSurface = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

interface IProps {
    open: boolean;
    handleDrawerClose: () => void;
    theme: Theme;
    drawerList: { icon: React.ReactNode; name: string; selected?: boolean; route: string }[];
    handleMouseEnter: (event: React.MouseEvent) => void;
    handleMouseLeave: (eventer: React.MouseEvent) => void;
}

const Drawer = (props: IProps) => {
    return (
        <DrawerSurface variant="permanent" open={props.open} onMouseEnter={props.handleMouseEnter} onMouseLeave={props.handleMouseLeave}>
            <DrawerHeader>
                <IconButton onClick={props.handleDrawerClose}>{props.theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}</IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {props.drawerList?.map((d) => (
                    <Link href={d.route} key={d.name} passHref>
                        <ListItem button sx={{ backgroundColor: d.selected ? '#f3f2f7' : '#fff' }}>
                            <ListItemIcon>{d.icon}</ListItemIcon>
                            <ListItemText primary={d.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </DrawerSurface>
    );
};

export { Drawer };
