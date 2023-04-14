import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { SyntheticEvent } from 'react';

export interface IAutocomplete {
    options: string[];
    label?: string;
    width?: number;
    name: string;
    defaultValue?: string | undefined;
    value: string | undefined;
    handleChange?: (name: string, value: string) => void;
    freeSolo?: boolean;
    required?: boolean;
}

const Autocomplete = ({ options, label, width, name, defaultValue, value, handleChange, freeSolo, required, ...props }: IAutocomplete) => {
    const handleAutoCompleteChange = (e?: React.ChangeEvent<HTMLInputElement>, newValue?: string | null) => {
        if (newValue && handleChange) {
            return handleChange(name, newValue);
        }
        if (e) {
            const { value } = e.target;
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
                onChange={(e, value) => handleAutoCompleteChange(undefined, value)}
                value={value}
                renderInput={(params) => (
                    <TextField {...params} required={required} label={label} name={name} onChange={(event) => console.log(event)} />
                )}
            />
        </>
    );
};

export { Autocomplete };
