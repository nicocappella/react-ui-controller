import { BoxProps } from '@mui/system';
import React, { FormEvent } from 'react';
import { Form } from '../../Molecules/Forms/Forms';

export interface IProps {
    direction: 'column' | 'row';
    handleSubmit?: (e: React.FormEvent) => void;
    children: React.ReactNode;
    background?: string;
    height?: string;
    width?: string;
    autoComplete?: 'on' | 'off';
}

const BasicForm = ({ direction, handleSubmit, children, background, height, width, autoComplete, ...props }: IProps & BoxProps<'form'>) => {
    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        if (handleSubmit) {
            handleSubmit(e);
        }
    };
    return (
        <Form
            {...props}
            direction={direction}
            handleSubmit={handleSubmitForm}
            background={background ? background : 'transparent'}
            width={width}
            height={height}
            autoComplete={autoComplete ? autoComplete : 'off'}
        >
            {children}
        </Form>
    );
};

export { BasicForm };
