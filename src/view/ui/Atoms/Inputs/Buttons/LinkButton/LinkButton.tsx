import React from 'react';
import { darken, Link, useTheme } from '@mui/material';

export interface ILinkButton {
    text: string;
    color: string;
    underline?: 'always' | 'hover' | 'none';
    href?: string;
}

const LinkButton = (props: ILinkButton) => {
    const theme = useTheme();
    return (
        <Link
            color={props.color}
            underline={props.underline ? props.underline : 'none'}
            component="a"
            variant="subtitle1"
            href={props.href}
            sx={{ cursor: 'pointer', '&:hover': { color: darken(props.color, 1) } }}
        >
            {props.text}
        </Link>
    );
};

export { LinkButton };
