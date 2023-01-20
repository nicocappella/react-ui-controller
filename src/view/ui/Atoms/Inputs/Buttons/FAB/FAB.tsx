import { Fab, FabProps } from '@mui/material';
import React from 'react';

export interface IFAB {
    size: 'small' | 'large';
    icon: JSX.Element;
    borderRadius: number;
    color: 'inherit' | 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'info' | 'warning' | undefined;
}

const FAB = ({ size, icon, color = 'primary', borderRadius = 16, ...props }: IFAB & FabProps) => {
    return <Fab sx={{ borderRadius: borderRadius + ' px' }} color={color} {...props}></Fab>;
};

export { FAB };
