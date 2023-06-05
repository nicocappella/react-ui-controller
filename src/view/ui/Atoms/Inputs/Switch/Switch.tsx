import { Switch as MuiSwitch, FormControlLabel, SelectChangeEvent, FormControlLabelProps } from '@mui/material';
import React from 'react';

export interface ISwitch {
    label?: string;
    labelPlacement?: 'top' | 'start' | 'end' | 'bottom';
    name?: string;
    checked: boolean;
    handleChange: (name: string | undefined, value: boolean) => void;
    width?: string | number;
}

export const Switch = ({ label, name, checked, handleChange, labelPlacement = 'start', width }: ISwitch) => {
    return (
        <FormControlLabel
            label={label}
            labelPlacement={labelPlacement}
            control={<MuiSwitch name={name} checked={checked} onChange={(e) => handleChange(name, e.target.checked)} title={name ? name : ''} />}
            sx={{ width, marginLeft: 0, marginRight: 0 }}
        ></FormControlLabel>
    );
};
