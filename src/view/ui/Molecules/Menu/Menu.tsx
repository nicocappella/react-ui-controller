import { Menu as MuiMenu } from '@mui/material';
import React from 'react';
import { IMenuItem, MenuItem } from '../../Atoms/MenuItem/MenuItem';

export interface IMenu {
    items: IMenuItem[];
    open: boolean;
    handleClose: (e: React.MouseEvent<HTMLElement>) => void;
    anchorEl: null | HTMLElement;
    anchorOrigin: {
        horizontal: 'center' | 'left' | 'right';
        vertical: 'bottom' | 'center' | 'top';
    };
}

const Menu = ({ items = [], open, handleClose, anchorEl = null, anchorOrigin }: IMenu) => {
    return (
        <MuiMenu open={open} onClose={handleClose} anchorEl={anchorEl} anchorOrigin={anchorOrigin}>
            {items.map((d, i) => (
                <MenuItem
                    key={`${i}-menu-item`}
                    startIcon={d.startIcon}
                    leadingText={d.leadingText}
                    endIcon={d.endIcon}
                    link={d.link}
                    handleClick={d.handleClick}
                />
            ))}
        </MuiMenu>
    );
};

export { Menu };
