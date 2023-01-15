import React from 'react';
import { darken, Link, useTheme } from '@mui/material';

export interface ILinkButton {
    text?: string;
    children?: React.ReactNode;
    component?: React.ReactNode;
    color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
    underline?: 'always' | 'hover' | 'none';
    href?: string;
    variant?:
        | 'inherit'
        | 'body1'
        | 'button'
        | 'caption'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'h4'
        | 'h5'
        | 'h6'
        | 'subtitle1'
        | 'subtitle2'
        | 'body2'
        | 'overline'
        | undefined;
}

const LinkButton = ({ text, component = 'a', color = 'primary', underline, href, variant = 'body2', children }: ILinkButton) => {
    const theme = useTheme();
    return (
        <Link color={color} underline={underline ? underline : 'none'} component={component} variant={variant} href={href} sx={{ cursor: 'pointer' }}>
            {text}
            {children && children}
        </Link>
    );
};

export { LinkButton };
