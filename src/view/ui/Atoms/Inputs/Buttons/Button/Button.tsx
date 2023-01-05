import React from 'react';
import { Button as MuiButton } from '@mui/material';

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
    href?: string;
    padding?: string;
    borderRadius?: string;
    uploadButton?: string;
}

const Button = ({
    variant = 'contained',
    type = 'button',
    text = 'Button',
    size,
    width,
    startIcon,
    endIcon,
    color,
    handleClick,
    href,
    padding = '24px',
    borderRadius = '100px',
    uploadButton,
}: IButton) => {
    return (
        <MuiButton
            variant={variant}
            type={type}
            size={size}
            sx={{ borderRadius, height: '40px', padding, textTransform: 'capitalize', width: 'fit-content' }}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            onClick={handleClick}
            href={href && href}
        >
            {text}
            {uploadButton && <input hidden accept={uploadButton} multiple type="file" />}
        </MuiButton>
    );
};

export { Button };
