import React from 'react';
import { InputLabel, MenuItem, Select as MuiSelect, FormControl, ListItemIcon, ListItemText, SelectChangeEvent, SelectProps } from '@mui/material';
import { Box } from '@mui/system';

export interface ISelect {
    itemWithIcon?: boolean;
    items?: string[];
    itemsObject?: { icon: string; text: string }[];
    label?: string;
    name: string;
    value: string;
    size?: 'medium' | 'small';
    handleChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
}

const Select = ({ itemWithIcon, items, itemsObject, label, name, value, size, handleChange, ...props }: ISelect & SelectProps) => {
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                {...props}
                labelId={label}
                value={value}
                id={label}
                onChange={handleChange}
                name={name}
                size={size}
                required
                label={label}
                renderValue={(value: any) => <Box component="div">{value}</Box>}
            >
                {itemWithIcon
                    ? itemsObject!.map((d, i) => (
                          <MenuItem key={i} value={d.text}>
                              <ListItemIcon>{d.icon}</ListItemIcon>
                              <ListItemText>{d.text}</ListItemText>
                          </MenuItem>
                      ))
                    : items?.map((d, i) => (
                          <MenuItem key={i} value={d}>
                              {d}
                          </MenuItem>
                      ))}
            </MuiSelect>
        </FormControl>
    );
};

export { Select };
