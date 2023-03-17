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
    handleChange: (event: SelectChangeEvent<unknown>, id?: string) => void;
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
    handleChange,
    width = '200px',
    ...props
}: ISelect & SelectProps) => {
    const handleChangeInterceptor = (event: SelectChangeEvent<unknown>) => {
        const { value } = event.target;
        const _items: Array<string | { id: string | number; text: string }> = items ? items : [];
        if (_items.every((item) => typeof item === 'object' && item !== null)) {
            // @ts-ignore
            const id = _items.find((d) => d.text === value).id;
            return handleChange(event, id);
        }
        return handleChange(event);
    };
    return (
        <FormControl>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                {...props}
                labelId={name}
                value={value}
                id={name}
                onChange={handleChangeInterceptor}
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
                                  <MenuItem key={i} value={d.text}>
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
