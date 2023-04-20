import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { CurrencyTextField } from './CurrencyTextField';
// import useState from 'storybook-addon-state';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/TextFields/CurrencyTextField',
    component: CurrencyTextField,
} as Meta<typeof CurrencyTextField>;

const Template: StoryFn<typeof CurrencyTextField> = (args) => <CurrencyTextField {...args} />;

export const NormalTextField = Template.bind({});

NormalTextField.args = {
    variant: 'outlined',
    label: '',
    name: 'test',
    width: '300px',
    padding: '20px',
    handleChange(name, value) {
        console.log(name, value);
    },
    prefix: '$',
};
