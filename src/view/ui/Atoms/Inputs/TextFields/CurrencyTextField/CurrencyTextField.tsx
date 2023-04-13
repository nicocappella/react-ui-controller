import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField as MuiTextField, TextFieldProps, Typography } from '@mui/material';
import React from 'react';
import CurrencyInput from 'react-currency-input-field';

export type PaletteColors = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface ITextField {
    align?: string;
    allowNegativeValues: boolean;
    autoComplete?: string;
    backgroundColor?: string;
    borderRadius?: string;
    borderColor?: { active?: string; hover?: string; focused: PaletteColors };
    endIcon?: string | React.ReactNode;
    fullWidth?: boolean;
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
    name: string;
    padding?: string | number;
    prefix: string;
    required?: boolean;
    rows?: number;
    size?: 'small' | 'medium';
    startIcon?: string | React.ReactNode;
    value: string | number | undefined;
    variant?: 'filled' | 'outlined' | 'standard';
    width?: string | number;
}

export const CurrencyTextField = ({
    align = 'right',
    allowNegativeValues = true,
    autoComplete,
    backgroundColor = '#fff',
    borderRadius,
    borderColor = { focused: 'primary' },
    endIcon,
    fullWidth = false,
    handleChange,
    handleEndIconClick,
    label = '',
    minWidth,
    name,
    padding,
    prefix,
    required,
    rows,
    size = 'medium',
    startIcon,
    value = 0,
    variant = 'outlined',
    width = '100%',
    ...props
}: ITextField & TextFieldProps) => {
    return (
        <Box component="div" display="flex" flexDirection="column">
            <>
                <MuiTextField
                    autoComplete={autoComplete}
                    color={borderColor.focused}
                    fullWidth={fullWidth}
                    label={label}
                    required={required}
                    size={size}
                    sx={{
                        borderRadius,
                        backgroundColor,
                        width: width,
                        color: borderColor.focused,
                        input: { padding: padding && padding, textAlign: 'right' },
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
                            textAlign: 'right',
                        },
                    }}
                    type="text"
                    variant={variant ? variant : 'outlined'}
                    InputProps={{
                        startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
                        endAdornment: <></>,
                        inputComponent: (props) => (
                            <CurrencyInput
                                {...props}
                                allowNegativeValue={allowNegativeValues}
                                name={name}
                                defaultValue={''}
                                decimalsLimit={2}
                                onValueChange={(value, name) => handleChange(name, value)}
                                style={{ textAlign: 'right' }}
                                prefix={prefix}
                            />
                        ),
                    }}
                    // value={value}
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
