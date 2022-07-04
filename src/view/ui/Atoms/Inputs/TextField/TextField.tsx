import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField as MuiTextField, Typography } from '@mui/material';
import React from 'react';

export enum Types {
    Button = 'button',
    Checkbox = 'checkbox',
    Color = 'color',
    Date = 'date',
    Datetime = 'datetime-local',
    Email = 'email',
    File = 'file',
    Hidden = 'hidden',
    Image = 'image',
    Month = 'month',
    Number = 'number',
    Password = 'password',
    Text = 'text',
}

interface ITextField {
    autoComplete?: string;
    endIcon?: string | React.ReactNode;
    fullWidth?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEndIconClick?: (e: React.MouseEvent) => void;
    label: string;
    isNumber?: boolean;
    multiline?: boolean;
    name: string;
    padding?: string | number;
    required?: boolean;
    rows?: number;
    size?: 'small' | 'medium';
    startIcon?: string | React.ReactNode;
    type: Types;
    value: string | number;
    variant?: 'filled' | 'outlined' | 'standard';
    width?: string | number;
}

const TextField = (props: ITextField) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box component="div" display="flex" flexDirection="column">
            <MuiTextField
                type={props.type !== Types.Password ? props.type : showPassword ? 'text' : 'password'}
                required={props.required}
                variant={props.variant ? props.variant : 'outlined'}
                label={props.label}
                fullWidth={props.fullWidth}
                size={props.size}
                name={props.name}
                value={props.value}
                sx={{
                    textAlign: 'center',
                    width: props.width,
                    input: { textAlign: props.isNumber ? 'right' : 'left', padding: props.padding && props.padding },
                }}
                autoComplete={props.autoComplete}
                InputProps={{
                    startAdornment: props.startIcon && <InputAdornment position="start">{props.startIcon}</InputAdornment>,
                    endAdornment:
                        props.type === Types.Password ? (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end" onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ) : (
                            props.endIcon && (
                                <InputAdornment position="end">
                                    <IconButton aria-label="" edge="end" onClick={props.handleEndIconClick}>
                                        {props.endIcon}
                                    </IconButton>
                                </InputAdornment>
                            )
                        ),
                }}
                onChange={props.handleChange}
                onKeyPress={(e) => {
                    if (props.isNumber) {
                        let charCode = e.key;
                        const regExpNumber = /^[0-9]*$/;
                        if (!regExpNumber.test(charCode)) {
                            e.preventDefault();
                        }
                    }
                }}
            />
            {props.required && (
                <Typography variant="caption" color="GrayText">
                    *Requerido
                </Typography>
            )}
        </Box>
    );
};

export { TextField };
