import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { CurrencyTextField } from './CurrencyTextField';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/TextFields/CurrencyTextField',
    component: CurrencyTextField,
} as Meta<typeof CurrencyTextField>;

const Template: StoryFn<typeof CurrencyTextField> = (args) => <CurrencyTextField {...args} />;

export const NormalTextField = Template.bind({});

NormalTextField.args = {
    variant: 'outlined',
    value: '',
    label: '',
    type: 'number',
    width: '60px',
    borderColor: {
        active: 'red',
        hover: 'blue',
        focused: 'primary',
    },
    padding: '20px',
};

export const FileButton = Template.bind({});
FileButton.args = {
    type: 'file',
    label: 'Subir archivos',
};

export const LargeTextField = Template.bind({});
LargeTextField.args = {};

export const NumberTextField = Template.bind({});

NumberTextField.args = {
    type: 'text',
    value: '0',
    variant: 'outlined',
    label: '',
    allowNegativeValues: false,
};
