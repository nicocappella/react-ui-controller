import { Card as MuiCard, CardActions, CardContent, CardHeader } from '@mui/material';

export interface IProps {
    header?: {
        avatar?: React.ReactNode;
        action?: React.ReactNode;
        title?: React.ReactNode;
        subheader?: string;
    };
    description: React.ReactNode | React.ReactNode[];
    actions?: React.ReactNode | React.ReactNode[];
    background: string;
    direction?: 'row' | 'column';
    alignment?: 'left' | 'center' | 'right';
    width?: string;
    height?: string;
    padding?: string;
}

const Card = ({ header, description, actions, direction = 'row', background, alignment = 'center', width, height, padding }: IProps) => {
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
            }}
        >
            {header && <CardHeader action={header.action} title={header.title} subheader={header.subheader} actions={header.action} />}
            <CardContent>{description}</CardContent>
            {actions && <CardActions>{actions}</CardActions>}
        </MuiCard>
    );
};

export { Card };
