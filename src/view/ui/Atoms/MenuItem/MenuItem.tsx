import React from 'react';
import { ListItemIcon, ListItemText, MenuItem as MuiMenuItem } from '@mui/material';
import Link from 'next/link';
import { LinkButton } from '../Inputs';

export interface IMenuItem {
    startIcon?: React.ReactNode;
    leadingText?: string;
    endIcon?: React.ReactNode;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
    width?: string;
    height?: string;
    LinkComponent?: React.ElementType<any>;
    route?: string;
}

export const MenuItem = ({
    startIcon,
    leadingText = 'Default',
    endIcon,
    handleClick = () => {},
    width = '260px',
    height = '48px',
    LinkComponent = 'a',
    route,
}: IMenuItem) => {
    const Item = () => {
        return (
            <MuiMenuItem onClick={handleClick} sx={{ width, pl: '16px', height }} disableGutters>
                {startIcon && <ListItemIcon>{startIcon}</ListItemIcon>}
                {leadingText && <ListItemText primary={leadingText} primaryTypographyProps={{ textTransform: 'none', variant: 'button' }} />}
                {endIcon && <ListItemIcon>{endIcon}</ListItemIcon>}
            </MuiMenuItem>
        );
    };
    return route ? <LinkButton href={route} component={LinkComponent} children={<Item />} /> : <Item />;
};
