import { Close, Menu } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { IconButton, LinkButton } from '../../../Atoms';

export interface INavigationDrawer {
    background?: string;
    borderRadius?: number;
    color?: string;
    close?: React.ReactNode;
    drawerButtons?: React.ReactNode | React.ReactNode[];
    logo?: React.ReactNode;
    /**
     *  Menu Icon
     *
     *  Insert a React node of an icon
     * */
    menu?: React.ReactNode;
    navButtons?: {
        text: string;
        icon?: React.ReactNode;
        route?: {
            href: string;
            wrapper: React.ElementType<any>;
        };
        divider?: boolean;
    }[];
    size?: number;
    transitionDuration?: { appear: number; enter: number; exit: number };
}

export const NavigationDrawer = ({
    borderRadius = 0,
    background = '#fff',
    color = '#000',
    close = <Close sx={{ color: color }} />,
    logo,
    menu,
    navButtons = [],
    size = 24,
    transitionDuration = { appear: 1500, enter: 750, exit: 1000 },
    ...props
}: INavigationDrawer) => {
    const [open, setOpen] = React.useState(false);
    const menuIcon = menu ? menu : <Menu style={{ color }} />;
    return (
        <>
            <Box p="24px 12px" position="absolute" zIndex={100}>
                <IconButton handleClick={() => setOpen(true)}>{menuIcon}</IconButton>
            </Box>
            <SwipeableDrawer
                {...props}
                anchor="left"
                open={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                PaperProps={{
                    sx: { borderRadius: `0px ${borderRadius}px ${borderRadius}px 0px`, padding: '24px 12px', backgroundColor: background },
                }}
                transitionDuration={transitionDuration}
            >
                <Box width={360}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '8px' }}>
                        {logo && <IconButton>{logo}</IconButton>}
                        <IconButton handleClick={() => setOpen(false)}>{close}</IconButton>
                    </Box>
                </Box>
                <List>
                    {navButtons.map(({ text, icon, route, divider }, i) =>
                        route ? (
                            <Box key={i} onClick={() => setOpen(false)}>
                                <LinkButton component={route.wrapper} href={route.href}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            {icon && <ListItemIcon sx={{ color, fontSize: size }}>{icon}</ListItemIcon>}
                                            <ListItemText primary={text} sx={{ color: color, fontSize: size }} />
                                        </ListItemButton>
                                    </ListItem>
                                </LinkButton>
                                {divider && <Divider />}
                            </Box>
                        ) : (
                            <Box key={i} onClick={() => setOpen(false)}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
                                        <ListItemText primary={text} sx={{ color }} />
                                    </ListItemButton>
                                </ListItem>
                                {divider && <Divider />}
                            </Box>
                        ),
                    )}
                </List>
            </SwipeableDrawer>
        </>
    );
};
