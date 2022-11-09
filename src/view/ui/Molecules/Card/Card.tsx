import { Card as MuiCard, CardActions, CardContent, CardHeader, CardProps } from '@mui/material';

export interface IProps {
    header?: {
        avatar?: React.ReactNode;
        action?: React.ReactNode;
        title?: React.ReactNode | string;
        subheader?: React.ReactNode | string;
        padding?: string;
        background?: string;
    };
    description: { components: React.ReactNode | React.ReactNode[]; padding: string };
    actions?: React.ReactNode | React.ReactNode[];
    background: string;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-evenly';
    alignment?: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
    padding?: string;
    elevated?: boolean;
    boxShadow?: string;
    borderRadius?: string;
}

const Card = (props: IProps) => {
    const {
        header,
        description,
        actions,
        direction = 'row',
        background,
        alignment = 'center',
        width,
        height,
        padding = '16px',
        elevated = false,
        boxShadow = '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        justifyContent = 'left',
        borderRadius = '20px',
    } = props;
    return (
        <MuiCard
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
            {header && (
                <CardHeader
                    action={header.action}
                    title={header.title}
                    subheader={header.subheader}
                    actions={header.action}
                    sx={{ padding: header.padding ? header.padding : '16px', background: header.background }}
                />
            )}
            <CardContent sx={{ padding: description.padding ? description.padding : '24px', '&:last-child': { paddingBottom: '0px' } }}>
                {description.components}
            </CardContent>
            {actions && <CardActions>{actions}</CardActions>}
        </MuiCard>
    );
};

export { Card };
