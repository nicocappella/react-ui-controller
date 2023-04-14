import { Switch as MuiSwitch, FormControlLabel, SelectChangeEvent } from '@mui/material';
import React from 'react';

export interface ISwitch {
    label?: string;
    labelPlacement?: 'top' | 'start' | 'end' | 'bottom';
    name?: string;
    checked: boolean;
    handleChange?: (name: string | undefined, value: boolean) => void;
}

export const Switch = ({ label, name, checked, handleChange, labelPlacement = 'end' }: ISwitch) => {
    const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (handleChange) {
            handleChange(name, checked);
        }
    };
    return (
        <FormControlLabel
            label={label}
            labelPlacement={labelPlacement}
            control={<MuiSwitch name={name} checked={checked} onChange={handleSwitchChange} />}
        ></FormControlLabel>
    );
};
