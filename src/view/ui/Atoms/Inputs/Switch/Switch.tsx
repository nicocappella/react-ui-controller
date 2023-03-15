import { Switch as MuiSwitch, FormControlLabel, SelectChangeEvent } from '@mui/material';
import React from 'react';

export interface ISwitch {
    label?: string;
    labelPlacement?: 'top' | 'start' | 'end' | 'bottom';
    name?: string;
    checked: boolean;
    handleChange?: (e: SelectChangeEvent<boolean>) => void;
}

export const Switch = ({ label, name, checked, handleChange, labelPlacement = 'end' }: ISwitch) => {
    return (
        <FormControlLabel
            label={label}
            labelPlacement={labelPlacement}
            control={<MuiSwitch name={name} checked={checked} onChange={handleChange} />}
        ></FormControlLabel>
    );
};
