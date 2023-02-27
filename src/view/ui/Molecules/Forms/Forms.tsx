import { Box, BoxProps } from '@mui/material';

interface IForm {
    direction: 'column' | 'row';
    handleSubmit: (e: React.FormEvent) => void;
    height?: string;
    width?: string;
    children: React.ReactNode;
    background: string;
    autoComplete?: string;
}

const Form = ({ direction, handleSubmit, height, width, children, background, autoComplete, ...props }: IForm & BoxProps<'form'>) => {
    return (
        <Box
            {...props}
            component="form"
            autoComplete={autoComplete}
            onSubmit={handleSubmit}
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
        >
            {children}
        </Box>
    );
};

export { Form };
