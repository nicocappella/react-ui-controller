import React from 'react';
import { Breadcrumbs as MuiBreadcrumb, Typography } from '@mui/material';
import { LinkButton } from '../../Atoms';
import { Home, NavigateNext } from '@mui/icons-material';

export interface IBreadcrumb {
    links: string[];
    active: string;
    component: React.ElementType<any> | undefined;
}

export const Breadcrumb = ({ links, active, component }: IBreadcrumb) => {
    return (
        <MuiBreadcrumb separator={<NavigateNext fontSize="small" />}>
            {links.map((d, i) => {
                if (d === active) {
                    return <Typography variant="caption">{d}</Typography>;
                }
                return (
                    <LinkButton
                        href={d}
                        key={i}
                        text={d === '' ? 'Inicio' : d}
                        variant="caption"
                        component={component}
                        icon={d === '' ? <Home /> : undefined}
                    />
                );
            })}
        </MuiBreadcrumb>
    );
};
