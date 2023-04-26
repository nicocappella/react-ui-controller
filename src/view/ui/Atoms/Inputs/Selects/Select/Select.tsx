import React from 'react';
import { InputLabel, MenuItem, Select as MuiSelect, FormControl, ListItemIcon, ListItemText, SelectProps, Typography } from '@mui/material';
import { PaletteColors } from '../../TextFields/TextField/TextField';

export interface ISelect {
    borderColor?: { active?: string; hover?: string; focused: PaletteColors };
    itemWithIcon?: boolean;
    items?: string[] | { id: string | number | undefined; text: string | undefined }[];
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
    // Test with SelectChangeEvent<string> if it works in another projects
    handleObjectClick?: (name: string, index: string | number) => void;
    handleChange?: (name: string | undefined, value: string | undefined) => void;
    width?: string | number;
}

const Select = ({
    borderColor,
    color,
    itemWithIcon,
    items,
    itemsObject,
    label,
    name,
    value,
    size,
    handleObjectClick,
    handleChange,
    width = '200px',
    ...props
}: ISelect & SelectProps) => {
    const handleSelectChange = (name: string | undefined, value: string | undefined) => {
        if (handleObjectClick) return;
        if (name && handleChange) {
            handleChange(name, value);
        }
    };
    const handleSelectObjectClick = (name?: string, id?: string | number) => {
        if (id && handleObjectClick && name) {
            handleObjectClick(name, id);
        }
    };
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                {...props}
                labelId={name}
                value={value}
                id={name}
                onChange={(e) => handleSelectChange(e.target.name, e.target.value as string)}
                name={name}
                size={size}
                required
                label={label}
                renderValue={(value: any) => <Typography color={color}>{value}</Typography>}
                sx={{
                    width,
                    ['& fieldset']: {
                        borderColor: borderColor?.active,
                    },
                    ['&:hover > fieldset']: {
                        borderColor: `${borderColor?.hover} !important`,
                    },
                }}
            >
                {itemWithIcon
                    ? itemsObject!.map((d, i) => (
                          <MenuItem key={i} value={d.text}>
                              <ListItemIcon>{d.icon}</ListItemIcon>
                              <ListItemText>{d.text}</ListItemText>
                          </MenuItem>
                      ))
                    : items?.map((d, i) => {
                          if (typeof d === 'string') {
                              return (
                                  <MenuItem key={i} value={d}>
                                      {d}
                                  </MenuItem>
                              );
                          }
                          if (typeof d === 'object') {
                              return (
                                  <MenuItem key={i} value={d.text} onClick={(e) => handleSelectObjectClick(name, d.id)}>
                                      {d.text}
                                  </MenuItem>
                              );
                          }
                      })}
            </MuiSelect>
        </FormControl>
    );
};

export { Select };
