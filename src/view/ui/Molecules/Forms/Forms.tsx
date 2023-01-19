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

const Form = ({ direction, handleSubmit, height, width, children, background, autoComplete, ...props }: IForm) => {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: direction,
                height: height,
                width: width,
                backgroundColor: background,
                justifyContent: 'space-between',
                borderRadius: '5px',
                padding: '15px',
            }}
            onSubmit={handleSubmit}
            autoComplete={autoComplete}
            {...props}
        >
            {children}
        </Box>
    );
};

export { Form };
