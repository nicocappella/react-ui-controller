import { Fab } from '@mui/material';
import React from 'react';

export interface IFAB {
    size: 'normal' | 'small' | 'large';
    icon: JSX.Element;
    borderRadius: number;
    color: "inherit" | "primary" | "secondary" | "default" | "success" | "error" | "info" | "warning" | undefined;
}

const FAB = ({ size = 'normal', icon, color = 'primary', borderRadius = 16 }: IFAB) => {
    return <Fab sx={{ borderRadius: borderRadius + ' px' }} color={color}></Fab>;
};

export { FAB };
