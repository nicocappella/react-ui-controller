import { Box } from '@mui/material';

interface IForm {
    direction: 'column' | 'row';
    handleSubmit: (e: React.FormEvent) => void;
    height?: string;
    width?: string;
    children: React.ReactNode;
    background: string;
    autoComplete: 'on' | 'off';
}

const Form = (props: IForm) => {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: props.direction,
                height: props.height,
                width: props.width,
                backgroundColor: props.background,
                justifyContent: 'space-between',
                borderRadius: '5px',
                padding: '15px',
            }}
            onSubmit={props.handleSubmit}
            autoComplete={props.autoComplete}
        >
            {props.children}
        </Box>
    );
};

export { Form };
