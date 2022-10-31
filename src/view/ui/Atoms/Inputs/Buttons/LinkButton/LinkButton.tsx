import { darken, Link } from '@mui/material';
import React from 'react';

export interface ILinkButton {
    text: string;
    color: string;
    underline?: 'always' | 'hover' | 'none';
    href: string;
}

const LinkButton = (props: ILinkButton) => {
    return (
        <Link color={props.color} underline={props.underline ? props.underline : 'none'} component="a" variant="subtitle1" href={props.href}>
            {props.text}
        </Link>
    );
};

export { LinkButton };
