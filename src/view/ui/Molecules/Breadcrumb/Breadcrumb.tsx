import { Home, NavigateNext } from '@mui/icons-material';
import { Breadcrumbs as MuiBreadcrumb, Typography } from '@mui/material';
import React from 'react';
import { capitalizeWord } from '../../../../utils/StringFormat';
import { LinkButton } from '../../Atoms';

export interface IBreadcrumb {
    links: string[];
    active: string;
    component: React.ElementType<any> | undefined;
}

export const Breadcrumb = ({ links = [], active, component }: IBreadcrumb) => {
    return (
        <MuiBreadcrumb separator={<NavigateNext fontSize="small" />}>
            <LinkButton href={'/'} text="Inicio" icon={<Home />} variant="body2" />
            {links.map((d, i) => {
                if (d === active) {
                    return <Typography variant="body2">{capitalizeWord(d)}</Typography>;
                }
                const to = `/${links.slice(0, i + 1).join('/')}`;
                return <LinkButton href={to} key={i} text={capitalizeWord(d)} variant="body2" component={component} />;
            })}
        </MuiBreadcrumb>
    );
};
