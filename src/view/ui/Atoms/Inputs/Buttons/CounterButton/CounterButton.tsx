import { Box } from '@mui/material';
import React from 'react';
import { IconButton } from '../IconButton';
import { Add, Remove } from '@mui/icons-material';
import { TextField } from '../../TextFields';

export interface ICounterButton {
    name: string;
    width?: string;
    handleValue: (name: string | undefined, value: number) => void;
}

export const CounterButton = ({ name, width = '120px', handleValue }: ICounterButton) => {
    const [value, setValue] = React.useState(0);
    const incrementValue = (e: React.MouseEvent<HTMLElement>, name: string) => {
        setValue(value + 1);
        handleValue(name, value + 1);
    };
    const decrementValue = (e: React.MouseEvent<HTMLElement>, name: string) => {
        if (value <= 0) return;
        setValue(value - 1);
        handleValue(name, value - 1);
    };
    const handleChange = (name: string | undefined, textFieldValue: string | undefined) => {
        if (name && textFieldValue) {
            setValue(Number(textFieldValue));
            handleValue(name, value);
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: '#1976d2', borderRadius: '48px', padding: '8px', width: 'fit-content' }}
        >
            <IconButton handleClick={(e) => decrementValue(e, name)}>
                <Remove />
            </IconButton>
            <TextField
                value={value}
                type="number"
                label=""
                variant="outlined"
                align="center"
                width={value.toString().length > 3 ? `${value.toString().length * 1.6}ch` : '6ch'}
                borderRadius="100px"
                name={name}
                size="small"
                handleChange={handleChange}
            />
            <IconButton handleClick={(e) => incrementValue(e, name)}>
                <Add />
            </IconButton>
        </Box>
    );
};
