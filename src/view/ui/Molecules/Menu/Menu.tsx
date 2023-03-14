import React from 'react';
import { Menu as MuiMenu } from '@mui/material';
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

const Menu = (props: IMenu) => {
    return (
        <MuiMenu open={props.open} onClose={props.handleClose} anchorEl={props.anchorEl} anchorOrigin={props.anchorOrigin}>
            {props.items.map((d, i) => (
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
