import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

export interface IButton {
    text: string;
    variant: 'contained' | 'outlined' | 'text';
    type: 'button' | 'reset' | 'submit';
    size?: 'small' | 'medium' | 'large';
    width?: string | number;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    color?: 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
    handleClick?: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    href?: string;
    padding?: string;
    borderRadius?: string;
    uploadButton?: { multiple: boolean; type: string; id: string };
}

const Button = ({
    variant = 'contained',
    type = 'button',
    text = 'Button',
    size,
    width = 'fit-content',
    startIcon,
    endIcon,
    color,
    handleClick,
    handleChange,
    href,
    padding = '24px',
    borderRadius = '100px',
    uploadButton,
    ...props
}: IButton & ButtonProps) => {
    return (
        <>
            {uploadButton && (
                <input
                    accept={uploadButton.type}
                    multiple={uploadButton.multiple}
                    type="file"
                    style={{ display: 'none' }}
                    id={uploadButton.id}
                    name={uploadButton.id}
                    onChange={handleChange}
                />
            )}
            <label htmlFor={uploadButton ? uploadButton!.id : undefined}>
                <MuiButton
                    {...props}
                    variant={variant}
                    type={type}
                    size={size}
                    sx={{ borderRadius, height: '40px', padding, textTransform: 'capitalize', width }}
                    startIcon={startIcon}
                    component={uploadButton ? 'span' : 'button'}
                    endIcon={endIcon}
                    color={color}
                    onClick={handleClick}
                    href={href && href}
                >
                    {text}
                </MuiButton>
            </label>
        </>
    );
};

export { Button };
