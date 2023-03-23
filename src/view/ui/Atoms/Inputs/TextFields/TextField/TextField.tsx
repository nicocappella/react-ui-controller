import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField as MuiTextField, TextFieldProps, Typography } from '@mui/material';
import React from 'react';

export type PaletteColors = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface ITextField {
    autoComplete?: string;
    borderRadius?: string;
    borderColor?: { active?: string; hover?: string; focused: PaletteColors };
    endIcon?: string | React.ReactNode;
    fullWidth?: boolean;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEndIconClick?: (e: React.MouseEvent) => void;
    label:
        | string
        | (string & React.ReactElement<any, string | React.JSXElementConstructor<any>>)
        | (string & React.ReactFragment)
        | (string & React.ReactPortal)
        | React.ReactElement<any, any>
        | undefined;
    isNumber?: boolean;
    multiline?: boolean;
    name: string;
    padding?: string | number;
    required?: boolean;
    rows?: number;
    size?: 'small' | 'medium';
    startIcon?: string | React.ReactNode;
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
    value: string | number | undefined;
    variant?: 'filled' | 'outlined' | 'standard';
    width?: string | number;
}

const TextField = ({
    autoComplete,
    borderRadius,
    borderColor = { focused: 'primary' },
    endIcon,
    fullWidth = false,
    handleChange,
    handleEndIconClick,
    label = 'TextField',
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
    width = '100%',
    ...props
}: ITextField & TextFieldProps) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box component="div" display="flex" flexDirection="column">
            <>
                <MuiTextField
                    autoComplete={autoComplete}
                    color={borderColor.focused}
                    fullWidth={fullWidth}
                    label={label}
                    name={name}
                    onChange={handleChange}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        if (isNumber) {
                            let charCode = e.key;
                            const regExpNumber = /^[0-9]*$/;
                            if (!regExpNumber.test(charCode)) {
                                e.preventDefault();
                            }
                        }
                    }}
                    multiline={multiline ? multiline : undefined}
                    required={required}
                    rows={multiline && rows ? rows : undefined}
                    size={size}
                    sx={{
                        width: width,
                        color: borderColor.focused,
                        input: { padding: padding && padding, textAlign: type === 'number' ? 'right' : 'left' },
                        ['&[type=number]::-webkit-inner-spin-button']: {
                            WebkitAppearance: 'none',
                            margin: 0,
                        },
                        ['[type=number]::-webkit-outer-inner-button']: {
                            WebkitAppearance: 'none',
                            margin: 0,
                        },
                        ['[type=number]']: {
                            MozAppearance: 'textfield',
                        },
                        ['& fieldset']: {
                            borderRadius: borderRadius,
                            borderColor: borderColor.active,
                        },
                        ['& div:hover > fieldset']: {
                            borderColor: `${borderColor.hover} !important`,
                        },
                        ['& label']: {
                            color: borderColor.active,
                        },
                    }}
                    type={type !== 'password' ? type : showPassword ? 'text' : 'password'}
                    variant={variant ? variant : 'outlined'}
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
                    value={value}
                    {...props}
                />
                {required && (
                    <Typography variant="caption" color="GrayText">
                        *Requerido
                    </Typography>
                )}
            </>
        </Box>
    );
};

export { TextField };
const c = <TextField />;
