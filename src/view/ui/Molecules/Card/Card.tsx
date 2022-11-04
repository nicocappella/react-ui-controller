import { Card as MuiCard, CardActions, CardContent, CardHeader, CardProps } from '@mui/material';

export interface IProps {
    header?: {
        avatar?: React.ReactNode;
        action?: React.ReactNode;
        title?: React.ReactNode;
        subheader?: string;
        padding?: string;
    };
    description: { components: React.ReactNode | React.ReactNode[]; padding: string };
    actions?: React.ReactNode | React.ReactNode[];
    background: string;
    direction?: 'row' | 'column';
    alignment?: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
    padding?: string;
    elevated: boolean;
    boxShadow: string;
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
    } = props;
    return (
        <MuiCard
            sx={{
                background,
                display: 'flex',
                flexDirection: direction,
                alignItems: alignment,
                borderRadius: '20px',
                width,
                height,
                textAlign: alignment,
                padding,
                boxShadow: boxShadow,
            }}
        >
            {header && (
                <CardHeader
                    action={header.action}
                    title={header.title}
                    subheader={header.subheader}
                    actions={header.action}
                    sx={{ padding: header.padding ? header.padding : '16px' }}
                />
            )}
            <CardContent sx={{ padding: description.padding ? description.padding : '24px' }}>{description.components}</CardContent>
            {actions && <CardActions>{actions}</CardActions>}
        </MuiCard>
    );
};

export { Card };
