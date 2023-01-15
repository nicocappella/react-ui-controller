import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import React from 'react';
import { Button, IconButton, LinkButton } from '../../../Atoms';
import { Box } from '@mui/system';

export interface INavigationDrawer {
    background?: string;
    borderRadius?: number;
    color?: string;
    close: React.ReactNode;
    drawerList?: { icon: React.ReactNode; name: string; selected?: boolean; route: string }[];
    drawerButtons?: React.ReactNode | React.ReactNode[];
    logo?: React.ReactNode;
    handleDrawerClose: () => void;
    /**
     *  Menu Icon
     *
     *  Insert a React node of an icon
     * */
    menu?: React.ReactNode;
    navButtons: {
        text: string;
        icon?: React.ReactNode;
        route?: {
            href: string;
            wrapper: React.ReactNode;
        };
    }[];
    open: boolean;
    handleMouseEnter: (event: React.MouseEvent) => void;
    handleMouseLeave: (eventer: React.MouseEvent) => void;
}

export const NavigationDrawer = ({
    borderRadius = 0,
    background = '#fff',
    color = '#000',
    close = <Close />,
    drawerList,
    handleDrawerClose,
    handleMouseEnter,
    handleMouseLeave,
    logo,
    menu = <Menu />,
    navButtons,
}: INavigationDrawer) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Box p="24px 12px">
                <IconButton handleClick={() => setOpen(true)}>{menu}</IconButton>
            </Box>
            <SwipeableDrawer
                anchor="left"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: { borderRadius: `0px ${borderRadius}px ${borderRadius}px 0px`, padding: '24px 12px', backgroundColor: background },
                }}
            >
                <Box width={360}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '8px' }}>
                        {logo && <IconButton>{logo}</IconButton>}
                        <IconButton handleClick={() => setOpen(false)}>{close}</IconButton>
                    </Box>
                </Box>
                <List>
                    {navButtons.map(({ text, icon, route }, i) =>
                        route ? (
                            <LinkButton component={route.wrapper} href={route.href}>
                                <ListItem key={i} disablePadding>
                                    <ListItemButton>
                                        {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
                                        <ListItemText primary={text} sx={{ color }} />
                                    </ListItemButton>
                                </ListItem>
                            </LinkButton>
                        ) : (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
                                    <ListItemText primary={text} sx={{ color }} />
                                </ListItemButton>
                            </ListItem>
                        ),
                    )}
                </List>
            </SwipeableDrawer>
        </>
    );
};
