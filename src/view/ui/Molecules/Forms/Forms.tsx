import { Box, BoxProps } from '@mui/material';
import { FormEvent } from 'react';

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
    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        handleSubmit(e);
    };
    return (
        <Box
            {...props}
            component="form"
            autoComplete={autoComplete}
            onSubmit={handleSubmitForm}
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
