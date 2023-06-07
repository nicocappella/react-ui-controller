import React from 'react';
import { Box, Autocomplete as MuiAutocomplete, TextField, Typography } from '@mui/material';
import { SyntheticEvent } from 'react';

export interface IAutocomplete {
    defaultValue?: string | undefined;
    freeSolo?: boolean;
    handleChange?: (name: string, value: string) => void;
    label?: string;
    name: string;
    options: string[];
    required?: boolean;
    value: string | undefined;
    width?: number;
}

const Autocomplete = ({ options = [], label, width, name, defaultValue, value, handleChange, freeSolo, required, ...props }: IAutocomplete) => {
    const handleAutoCompleteChange = (e: React.ChangeEvent<HTMLInputElement> | SyntheticEvent<Element, Event>, newValue?: string | null) => {
        if (newValue && handleChange) {
            return handleChange(name, newValue);
        }
        if (e) {
            const { value } = e.target as HTMLInputElement;
            if (value && handleChange) {
                return handleChange(name, value);
            }
        }
    };
    return (
        <>
            <MuiAutocomplete
                {...props}
                blurOnSelect
                disablePortal
                id="combo-box-demo"
                options={options}
                freeSolo
                key={name}
                selectOnFocus
                // clearOnBlur={false}
                handleHomeEndKeys
                sx={{ width: width }}
                placeholder={name}
                // defaultValue={defaultValue}
                onChange={(e, value) => handleAutoCompleteChange(e, value)}
                renderInput={(params) => <TextField {...params} required={required} label={label} name={name} onChange={handleAutoCompleteChange} />}
                // renderOption={(props, option) => (
                //     <Box display="flex" gap={2}>
                //         <Box>
                //             <Typography variant="body1"></Typography>
                //             <Typography variant="body2"></Typography>
                //         </Box>
                //     </Box>
                // )}
                value={value}
            />
        </>
    );
};

export { Autocomplete };
