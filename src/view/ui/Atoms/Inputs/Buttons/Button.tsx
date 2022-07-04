import { Button as MuiButton } from '@mui/material';

interface IButton {
    children: React.ReactNode;
    variant: 'contained' | 'outlined' | 'text';
    type: 'button' | 'reset' | 'submit';
    size?: 'small' | 'medium' | 'large';
    width?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    color?: 'error' | 'info' | 'inherit' | 'primary' | 'secondary' | 'success' | 'warning';
    handleClick?: () => void;
}

const Button = (props: IButton) => {
    return (
        <MuiButton
            variant={props.variant}
            type={props.type}
            size={props.size ? props.size : 'medium'}
            sx={{ width: 'fit-content', borderRadius: '100px', height: '40px', margin: '0 auto', padding: '20px', textTransform: 'capitalize' }}
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            color={props.color}
            onClick={props.handleClick}
        >
            {props.children}
        </MuiButton>
    );
};

export { Button };
