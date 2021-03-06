import { Card as MuiCard, CardActions, CardContent, CardHeader } from '@mui/material';

interface IProps {
    header?: {
        avatar?: React.ReactNode;
        action?: React.ReactNode;
        title?: React.ReactNode;
        subheader?: string;
    };
    children: React.ReactNode;
    actions?: string;
}

const Card = (props: IProps) => {
    return (
        <MuiCard>
            {props.header && (
                <CardHeader
                    action={props.header.action}
                    title={props.header.title}
                    subheader={props.header.subheader}
                    actions={props.header.action}
                />
            )}
            <CardContent>{props.children}</CardContent>
            {props.actions && <CardActions>{props.actions}</CardActions>}
        </MuiCard>
    );
};

export { Card };
