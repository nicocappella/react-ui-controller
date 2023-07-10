import React from 'react';
import { Card as MuiCard, CardActions, CardContent, CardHeader, CardProps, CardActionArea, CardMedia } from '@mui/material';

export interface ICard {
    actions?: React.ReactNode | React.ReactNode[];
    alignment?: 'left' | 'center' | 'right';
    background?: string;
    description?: { components: React.ReactNode | React.ReactNode[]; padding?: string };
    borderRadius?: string;
    boxShadow?: string;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    elevated?: boolean;
    header?: {
        action?: React.ReactNode;
        avatar?: React.ReactNode;
        background?: string;
        padding?: string;
        subheader?: React.ReactNode | string;
        title?: React.ReactNode | string;
    };
    height?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly';
    LinkComponent?: { component: React.ElementType<any> | undefined; href: string };
    media?: { height: number | string; src: string; title: string };
    padding?: string;
    width?: string;
}

const Card = ({
    actions,
    alignment = 'center',
    background = '#fff',
    boxShadow = '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
    borderRadius = '20px',
    description,
    direction = 'column',
    elevated = false,
    header,
    height,
    justifyContent = 'flex-start',
    LinkComponent,
    media,
    padding = '0px',
    width = '300px',
    ...props
}: ICard & CardProps) => {
    const StandardCard = () => {
        return (
            <>
                {media && <CardMedia sx={{ height: media.height, width: '100%' }} image={media.src} title={media.title} />}
                {header && (
                    <CardHeader
                        action={header.action}
                        title={header.title}
                        subheader={header.subheader}
                        actions={header.action}
                        sx={{ padding: header.padding ? header.padding : '16px', background: header.background }}
                    />
                )}
                {description && (
                    <CardContent sx={{ padding: description.padding ? description.padding : '24px', '&:last-child': { paddingBottom: '0px' } }}>
                        {description.components}
                    </CardContent>
                )}
                {actions && <CardActions>{actions}</CardActions>}
            </>
        );
    };
    return (
        <MuiCard
            {...props}
            role="figure"
            title="card"
            sx={{
                background,
                display: 'flex',
                flexDirection: direction,
                alignItems: alignment,
                width,
                height,
                textAlign: alignment,
                padding,
                boxShadow: boxShadow,
                justifyContent,
                borderRadius,
            }}
        >
            {LinkComponent && (
                <CardActionArea
                    LinkComponent={LinkComponent.component}
                    href={LinkComponent.href}
                    sx={{ display: 'flex', height: '100%', flexDirection: direction, justifyContent, alignItems: alignment }}
                >
                    <StandardCard />
                </CardActionArea>
            )}
            {!LinkComponent && <StandardCard />}
        </MuiCard>
    );
};

export { Card };
