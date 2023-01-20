import { BoxProps } from '@mui/system';
import React from 'react';
import { Form } from '../../Molecules/Forms/Forms';

export interface IProps {
    direction: 'column' | 'row';
    handleSubmit: (e: React.FormEvent) => void;
    children: React.ReactNode;
    background?: string;
    height?: string;
    width?: string;
    autoComplete?: 'on' | 'off';
}

const BasicForm = ({ direction, handleSubmit, children, background, height, width, autoComplete, ...props }: IProps & BoxProps) => {
    return (
        <Form
            direction={direction}
            handleSubmit={handleSubmit}
            background={background ? background : 'transparent'}
            width={width}
            height={height}
            autoComplete={autoComplete ? autoComplete : 'off'}
            {...props}
        >
            {children}
        </Form>
    );
};

export { BasicForm };
