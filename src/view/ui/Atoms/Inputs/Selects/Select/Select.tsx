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
import { PaletteColors } from '../../TextFields/TextField/TextField';

export interface ISelect {
    borderColor?: { active?: string; hover?: string; focused: PaletteColors };
    itemWithIcon?: boolean;
    items?: string[] | { [key: string]: string | number; id: string | number; text: string }[];
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
    handleObjectClick: (event: React.MouseEvent<HTMLElement>, index: string | number, name: string) => void;
    handleChange: (event: SelectChangeEvent<unknown>) => void;
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
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                {...props}
                labelId={name}
                value={value}
                id={name}
                onChange={handleChange}
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
                                  <MenuItem key={i} value={d.text} onClick={(e) => handleObjectClick(e, d.id, name)}>
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
