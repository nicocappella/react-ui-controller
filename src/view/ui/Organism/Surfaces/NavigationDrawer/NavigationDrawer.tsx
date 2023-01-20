import { Close, Menu } from '@mui/icons-material';
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, SwipeableDrawerProps } from '@mui/material';
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
}

export const NavigationDrawer = ({
    borderRadius = 0,
    background = '#fff',
    color = '#000',
    close = <Close sx={{ color: color }} />,
    logo,
    menu = <Menu />,
    navButtons = [],
    size = 24,
    ...props
}: INavigationDrawer & SwipeableDrawerProps) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Box p="24px 12px">
                <IconButton handleClick={() => setOpen(true)}>{menu}</IconButton>
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
                            <>
                                <LinkButton component={route.wrapper} href={route.href}>
                                    <ListItem key={i} disablePadding>
                                        <ListItemButton>
                                            {icon && <ListItemIcon sx={{ color, fontSize: size }}>{icon}</ListItemIcon>}
                                            <ListItemText primary={text} sx={{ color, fontSize: size }} />
                                        </ListItemButton>
                                    </ListItem>
                                </LinkButton>
                                {divider && <Divider />}
                            </>
                        ) : (
                            <>
                                <ListItem key={i} disablePadding>
                                    <ListItemButton>
                                        {icon && <ListItemIcon sx={{ color }}>{icon}</ListItemIcon>}
                                        <ListItemText primary={text} sx={{ color }} />
                                    </ListItemButton>
                                </ListItem>
                                {divider && <Divider />}
                            </>
                        ),
                    )}
                </List>
            </SwipeableDrawer>
        </>
    );
};
