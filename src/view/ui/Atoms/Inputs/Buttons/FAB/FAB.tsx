import { Fab, FabProps, SvgIconTypeMap } from '@mui/material';
import { Edit } from '@mui/icons-material';
import React from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IFAB {
    size: 'small' | 'large';
    icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    borderRadius?: number;
    color?: 'inherit' | 'primary' | 'secondary' | 'default' | 'success' | 'error' | 'info' | 'warning' | undefined;
}

const FAB = ({ size, icon = Edit, color = 'primary', borderRadius = 16, ...props }: IFAB & FabProps) => {
    return <Fab {...props} sx={{ borderRadius: borderRadius + ' px' }} color={color} title="FAB"></Fab>;
};

export { FAB };
