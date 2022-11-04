import { Fab } from '@mui/material';
import React from 'react';
import { Color } from '../../../../types';

export interface IExtendedFAB {
    startIcon?: React.ReactNode;
    text: string;
    color: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
    borderRadius?: number;
}

const ExtendedFAB = ({ text = 'Extended FAB', startIcon, color = 'primary', borderRadius = 16 }: IExtendedFAB) => {
    return (
        <Fab variant="extended" sx={{ borderRadius: borderRadius + ' px', textTransform: 'capitalize' }} color={color}>
            {startIcon}
            {text}
        </Fab>
    );
};

export { ExtendedFAB };
