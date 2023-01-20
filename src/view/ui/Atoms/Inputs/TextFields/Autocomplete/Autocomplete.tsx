import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { SyntheticEvent } from 'react';

export interface IAutocomplete {
    options: string[];
    label?: string;
    width: number;
    name: string;
    defaultValue?: string | undefined;
    value: string | undefined;
    handleChange?: (e: SyntheticEvent<Element, Event>, newValue?: string | null) => void;
    freeSolo?: boolean;
    required?: boolean;
}

const Autocomplete = ({ options, label, width, name, defaultValue, value, handleChange, freeSolo, required, ...props }: IAutocomplete) => {
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
                onChange={(event, value) => handleChange!(event, value)}
                value={value}
                renderInput={(params) => <TextField {...params} required={required} label={label} name={name} onChange={handleChange} />}
            />
        </>
    );
};

export { Autocomplete };
