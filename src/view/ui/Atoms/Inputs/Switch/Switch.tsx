import { Switch as MuiSwitch, FormControlLabel, SelectChangeEvent, FormControlLabelProps } from '@mui/material';
import React from 'react';

export interface ISwitch {
    label?: string;
    labelPlacement?: 'top' | 'start' | 'end' | 'bottom';
    name?: string;
    checked: boolean;
    handleChange: (name: string | undefined, value: boolean) => void;
}

export const Switch = ({ label, name, checked, handleChange, labelPlacement = 'start', ...props }: ISwitch & FormControlLabelProps) => {
    return (
        <FormControlLabel
            {...props}
            label={label}
            labelPlacement={labelPlacement}
            control={<MuiSwitch name={name} checked={checked} onChange={(e) => handleChange(name, e.target.checked)} />}
        ></FormControlLabel>
    );
};
