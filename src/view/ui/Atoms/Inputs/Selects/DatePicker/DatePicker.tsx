import React from 'react';
import { DatePicker as MuiDatePicker, DatePickerProps, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material';
import esLocale from 'date-fns/locale/es';

export interface IDatePicker {
    value?: Date | null;
    name?: string;
    handleChange?: (name: string | undefined, value: Date | null) => void;
    views: Array<'day' | 'month' | 'year'>;
    maxDate: Date;
}

const DatePicker = ({
    value = new Date(),
    handleChange = () => {},
    name,
    views,
    maxDate = new Date(),
    ...props
}: IDatePicker & DatePickerProps<Date>) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={esLocale}>
            <MuiDatePicker
                {...props}
                value={value}
                onChange={(value: Date | null) => handleChange(name, value)}
                views={views}
                maxDate={maxDate}
                slots={{ textField: TextField }}
                slotProps={{
                    textField: {
                        name,
                        size: 'small',
                        variant: 'outlined',
                    },
                }}
            />
        </LocalizationProvider>
    );
};

export { DatePicker };
