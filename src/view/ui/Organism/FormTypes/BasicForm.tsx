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

const BasicForm = (props: IProps) => {
    return (
        <Form
            direction={props.direction}
            handleSubmit={props.handleSubmit}
            background={props.background ? props.background : 'transparent'}
            width={props.width}
            height={props.height}
            autoComplete={props.autoComplete ? props.autoComplete : 'off'}
        >
            {props.children}
        </Form>
    );
};

export { BasicForm };
