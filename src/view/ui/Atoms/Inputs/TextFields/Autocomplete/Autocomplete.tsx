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

const Autocomplete = (props: IAutocomplete) => {
    return (
        <>
            <MuiAutocomplete
                blurOnSelect
                disablePortal
                id="combo-box-demo"
                options={props.options}
                freeSolo
                key={props.name}
                selectOnFocus
                // clearOnBlur={false}
                handleHomeEndKeys
                sx={{ width: props.width }}
                placeholder={props.name}
                // defaultValue={props.defaultValue}
                onChange={(event, value) => props.handleChange!(event, value)}
                value={props.value}
                renderInput={(params) => (
                    <TextField {...params} required={props.required} label={props.label} name={props.name} onChange={props.handleChange} />
                )}
            />
        </>
    );
};

export { Autocomplete };
