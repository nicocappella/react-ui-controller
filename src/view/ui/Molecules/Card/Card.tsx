import { Card as MuiCard, CardActions, CardContent, CardHeader } from '@mui/material';

export interface IProps {
    header?: {
        avatar?: React.ReactNode;
        action?: React.ReactNode;
        title?: React.ReactNode;
        subheader?: string;
    };
    description: React.ReactNode | React.ReactNode[];
    actions?: string;
    background: string;
    direction?: 'row' | 'column'
}

const Card = ({ header, description, actions, direction = 'row', background}: IProps) => {
    return (
        <MuiCard sx={{ background, display: 'flex', flexDirection: direction }}>
            {header && (
                <CardHeader
                    action={header.action}
                    title={header.title}
                    subheader={header.subheader}
                    actions={header.action}
                />
            )}
            <CardContent>{description}</CardContent>
            {actions && <CardActions>{actions}</CardActions>}
        </MuiCard>
    );
};

export { Card };
