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
    handleObjectClick?: (name: string, index: string | number) => void;
    handleChange: (name: string | undefined, value: string | undefined) => void;
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
    const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
        const { name, value } = e.target;
        if (name && typeof value === 'string') {
            handleChange(name, value);
        }
    };
    const handleSelectObjectClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>, id?: string | number, name?: string) => {
        if (id && value && handleObjectClick && name) {
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
                onChange={handleSelectChange}
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
                                  <MenuItem key={i} value={d.text} onClick={(e) => handleSelectObjectClick(e, d.id, name)}>
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
