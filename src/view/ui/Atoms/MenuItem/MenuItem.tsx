import React from 'react';
import { ListItemIcon, ListItemText, MenuItem as MuiMenuItem } from '@mui/material';
import Link from 'next/link';

export interface IMenuItem {
    startIcon?: React.ReactNode;
    leadingText?: string;
    endIcon?: React.ReactNode;
    link?: string;
    handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const MenuItem = ({ startIcon, leadingText = 'Default', endIcon, link, handleClick }: IMenuItem) => {
    const menuItem = (
        <MuiMenuItem onClick={handleClick}>
            {startIcon && <ListItemIcon>{startIcon}</ListItemIcon>}
            {leadingText && <ListItemText>{leadingText}</ListItemText>}
            {endIcon && <ListItemIcon>{endIcon}</ListItemIcon>}
        </MuiMenuItem>
    );
    return (
        <>
            {link && (
                <Link href={link ? link : ''} passHref>
                    {menuItem}
                </Link>
            )}
            {!link && menuItem}
        </>
    );
};
