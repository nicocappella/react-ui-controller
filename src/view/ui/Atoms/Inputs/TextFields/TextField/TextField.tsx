import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField as MuiTextField, TextFieldProps, Typography } from '@mui/material';
import AutoNumeric from 'autonumeric';
import React from 'react';

export type PaletteColors = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface ICurrencyTextField {
    align?: string;
    autoComplete?: string;
    backgroundColor?: string;
    borderRadius?: string;
    borderColor?: { active?: string; hover?: string; focused: PaletteColors };
    endIcon?: string | React.ReactNode;
    fullWidth?: boolean;
    handleOnBlur?: (name: string | undefined, value: string | undefined) => void;
    handleChange: (name: string | undefined, value: string | undefined) => void;
    handleEndIconClick?: (e: React.MouseEvent) => void;
    label:
        | string
        | (string & React.ReactElement<any, string | React.JSXElementConstructor<any>>)
        | (string & React.ReactFragment)
        | (string & React.ReactPortal)
        | React.ReactElement<any, any>
        | undefined;
    minWidth?: string;
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

export const TextField = ({
    align = 'left',
    autoComplete,
    backgroundColor = '#fff',
    borderRadius,
    borderColor = { focused: 'primary' },
    endIcon,
    fullWidth = false,
    handleOnBlur,
    handleChange,
    handleEndIconClick,
    label = 'TextField',
    minWidth,
    multiline,
    name,
    padding,
    required,
    rows,
    size = 'medium',
    startIcon,
    type = 'text',
    value,
    variant = 'outlined',
    width = '100%',
    ...props
}: ICurrencyTextField & TextFieldProps) => {
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
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    onBlur={(e) => handleOnBlur(e.target.name, e.target.value)}
                    multiline={multiline ? multiline : undefined}
                    required={required}
                    rows={multiline && rows ? rows : undefined}
                    size={size}
                    sx={{
                        borderRadius,
                        backgroundColor,
                        width: width,
                        color: borderColor.focused,
                        input: { padding: padding && padding, textAlign: 'left' },
                        minWidth,
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
                            borderRadius,
                            borderColor: borderColor.active,
                        },
                        ['& div:hover > fieldset']: {
                            borderColor: `${borderColor.hover} !important`,
                        },
                        ['& label']: {
                            color: borderColor.active,
                        },
                        ['& input']: {
                            textAlign: align,
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
