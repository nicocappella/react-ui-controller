import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField as MuiTextField, TextFieldProps, Typography } from '@mui/material';
import React from 'react';

export interface ITextField {
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
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    type:
        | 'button'
        | 'checkbox'
        | 'color'
        | 'date'
        | 'datetime-local'
        | 'email'
        | 'file'
        | 'hidden'
        | 'image'
        | 'month'
        | 'number'
        | 'password'
        | 'text';
    value: string | number;
    variant?: 'filled' | 'outlined' | 'standard';
    width?: string | number;
}

const TextField = ({
    autoComplete,
    endIcon,
    fullWidth = false,
    handleChange,
    handleEndIconClick,
    label = 'TextField',
    color = 'primary',
    isNumber,
    multiline,
    name,
    padding,
    required,
    rows,
    size = 'medium',
    startIcon,
    type = 'text',
    value,
    variant = 'filled',
    width = 200,
}: ITextField) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box component="div" display="flex" flexDirection="column">
            <MuiTextField
                type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
                color={color}
                required={required}
                variant={variant ? variant : 'outlined'}
                label={label}
                fullWidth={fullWidth}
                size={size}
                name={name}
                value={value}
                sx={{
                    textAlign: 'center',
                    width: width,
                    input: { textAlign: isNumber ? 'right' : 'left', padding: padding && padding },
                }}
                autoComplete={autoComplete}
                InputProps={{
                    startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
                    endAdornment:
                        type === 'password' ? (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" edge="end" onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ) : (
                            endIcon && (
                                <InputAdornment position="end">
                                    <IconButton aria-label="" edge="end" onClick={handleEndIconClick}>
                                        {endIcon}
                                    </IconButton>
                                </InputAdornment>
                            )
                        ),
                }}
                onChange={handleChange}
                onKeyPress={(e) => {
                    if (isNumber) {
                        let charCode = e.key;
                        const regExpNumber = /^[0-9]*$/;
                        if (!regExpNumber.test(charCode)) {
                            e.preventDefault();
                        }
                    }
                }}
            />
            {required && (
                <Typography variant="caption" color="GrayText">
                    *Requerido
                </Typography>
            )}
        </Box>
    );
};

export { TextField };
