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

export const MenuItem = (props: IMenuItem) => {
    const menuItem = (
        <MuiMenuItem onClick={props.handleClick}>
            {props.startIcon && <ListItemIcon>{props.startIcon}</ListItemIcon>}
            {props.leadingText && <ListItemText>{props.leadingText}</ListItemText>}
            {props.endIcon && <ListItemIcon>{props.endIcon}</ListItemIcon>}
        </MuiMenuItem>
    );
    return (
        <>
            {props.link && (
                <Link href={props.link ? props.link : ''} passHref>
                    {menuItem}
                </Link>
            )}
            {!props.link && menuItem}
        </>
    );
};
