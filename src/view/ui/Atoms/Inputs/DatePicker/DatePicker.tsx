import React from 'react';
import { DatePicker as MuiDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import esLocale from 'date-fns/locale/es';

interface IDatePicker {
    value: Date | null;
    handleChange: (value: Date | null) => void;
}

const DatePicker = (props: IDatePicker) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
            <MuiDatePicker
                value={props.value}
                onChange={(value: Date | null) => props.handleChange(value)}
                renderInput={(params) => <TextField variant="standard" sx={{ width: 140 }} {...params} />}
            />
        </LocalizationProvider>
    );
};

export { DatePicker };
