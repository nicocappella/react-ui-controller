import React from 'react';
import { darken, Link, LinkProps, useTheme } from '@mui/material';

export interface ILinkButton {
    text?: string;
    icon?: React.ReactNode;
    startIcon?: boolean;
    component?: React.ElementType<any>;
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

const LinkButton = ({
    text,
    component = 'a',
    color = 'primary',
    underline,
    href,
    variant = 'body2',
    icon,
    startIcon = true,
    children,
    ...props
}: ILinkButton & LinkProps) => {
    return (
        <Link
            {...props}
            color={color}
            underline={underline ? underline : 'none'}
            component={component}
            variant={variant}
            href={href}
            display="flex"
            alignItems="center"
            sx={{ cursor: 'pointer', flexDirection: startIcon ? 'row' : 'row-reverse' }}
        >
            {icon && icon}
            {text && text}
            {children}
        </Link>
    );
};

export { LinkButton };
