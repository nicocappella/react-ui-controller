import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material';

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
}

const Button = ({ variant = 'contained', type = 'button', text = 'Button', size, width, startIcon, endIcon, color, handleClick, href }: IButton) => {
    return (
        <MuiButton
            variant={variant}
            type={type}
            size={size}
            sx={{ width: 'fit-content', borderRadius: '100px', height: '40px', margin: '0 auto', padding: '20px', textTransform: 'capitalize' }}
            startIcon={startIcon}
            endIcon={endIcon}
            color={color}
            onClick={handleClick}
            href={href && href}
        >
            {text}
        </MuiButton>
    );
};

export { Button };
