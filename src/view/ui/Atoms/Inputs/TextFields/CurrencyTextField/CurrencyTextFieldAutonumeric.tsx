import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField as MuiTextField, TextFieldProps, Typography } from '@mui/material';
import AutoNumeric from 'autonumeric';
import React from 'react';

export type PaletteColors = 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';

export interface ITextField {
    align?: string;
    autoComplete?: string;
    backgroundColor?: string;
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
    minWidth?: string;
    name: string;
    padding?: string | number;
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
    required,
    rows,
    size = 'medium',
    startIcon,
    value = 0,
    variant = 'outlined',
    width = '100%',
    ...props
}: ITextField & TextFieldProps) => {
    const [numberValue, setNumberValue] = React.useState<AutoNumeric>();
    const textFieldRef = React.useRef<HTMLInputElement>(null);
    const predefined = AutoNumeric.getPredefinedOptions().Spanish;
    const getValue = () => {
        if (!numberValue) return;
        return numberValue.getNumericString();
    };
    const eventHandler = (e: React.SyntheticEvent<HTMLInputElement>, eventName: string) => {
        setNumberValue()
    };
    React.useEffect(() => {
        if (textFieldRef.current) {
            const number = new AutoNumeric(textFieldRef.current, value, {
                ...predefined,
                ...props,
                currencySymbol: '$',
                currencySymbolPlacement: 'p',
            });

            setNumberValue(number.getNumericString());
        }
    }, [numberValue, textFieldRef]);

    console.log(numberValue);
    return (
        <Box component="div" display="flex" flexDirection="column">
            <>
                <MuiTextField
                    autoComplete={autoComplete}
                    color={borderColor.focused}
                    fullWidth={fullWidth}
                    label={label}
                    name={name}
                    // onChange={handleChange}
                    // onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    //     let charCode = e.key;
                    //     const regExpNumber = /^[0-9]*$/;
                    //     if (!regExpNumber.test(charCode)) {
                    //         e.preventDefault();
                    //     }
                    // }}
                    onChange={(e) => eventHandler(e, 'onChange')}
                    onFocus={(e) => eventHandler(e, 'onFocus')}
                    onBlur={(e) => eventHandler(e, 'onBlur')}
                    onKeyPress={(e) => eventHandler(e, 'onKeyPress')}
                    onKeyUp={(e) => eventHandler(e, 'onKeyUp')}
                    onKeyDown={(e) => eventHandler(e, 'onKeyDown')}
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
                    }}
                    inputProps={{
                        ref: textFieldRef,
                    }}
                    value={numberValue}
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
