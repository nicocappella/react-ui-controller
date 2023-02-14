import React from 'react';
import {
    InputLabel,
    MenuItem,
    Select as MuiSelect,
    FormControl,
    ListItemIcon,
    ListItemText,
    SelectChangeEvent,
    SelectProps,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';

export interface ISelect {
    itemWithIcon?: boolean;
    items?: string[];
    itemsObject?: { icon: string; text: string }[];
    color?: string;
    label?:
        | string
        | (string & React.ReactElement<any, string | React.JSXElementConstructor<any>>)
        | (string & React.ReactFragment)
        | (string & React.ReactPortal)
        | React.ReactElement
        | undefined;
    name: string;
    value: string | undefined;
    size?: 'medium' | 'small';
    handleChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
    width?: string | number;
}

const Select = ({
    color,
    itemWithIcon,
    items,
    itemsObject,
    label,
    name,
    value,
    size,
    handleChange,
    width = '200px',
    ...props
}: ISelect & SelectProps) => {
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
                renderValue={(value: any) => <Typography color={color}>{value}</Typography>}
                sx={{ width }}
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
