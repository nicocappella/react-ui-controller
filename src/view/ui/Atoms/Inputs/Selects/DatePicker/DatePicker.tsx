import React from 'react';
import { DatePicker as MuiDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import esLocale from 'date-fns/locale/es';

export interface IDatePicker {
    value: Date | null;
    handleChange: (value: Date | null) => void;
}

const DatePicker = ({ value, handleChange, ...props }: IDatePicker & DatePickerProps<Date, Date>) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
            <MuiDatePicker
                {...props}
                value={value}
                onChange={(value: Date | null) => handleChange(value)}
                renderInput={(params) => <TextField variant="standard" sx={{ width: 140 }} {...params} />}
            />
        </LocalizationProvider>
    );
};

export { DatePicker };
