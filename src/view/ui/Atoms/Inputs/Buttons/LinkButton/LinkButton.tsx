import React from 'react';
import { darken, Link, useTheme } from '@mui/material';

export interface ILinkButton {
    text: string;
    color?: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | undefined;
    underline?: 'always' | 'hover' | 'none';
    href?: string;
}

const LinkButton = ({ text, color = 'primary', underline, href }: ILinkButton) => {
    const theme = useTheme();
    return (
        <Link
            color={color}
            underline={underline ? underline : 'none'}
            component="a"
            variant="subtitle1"
            href={href}
            // sx={{ cursor: 'pointer', '&:hover': { color: darken(color, 1) } }}
        >
            {text}
        </Link>
    );
};

export { LinkButton };
