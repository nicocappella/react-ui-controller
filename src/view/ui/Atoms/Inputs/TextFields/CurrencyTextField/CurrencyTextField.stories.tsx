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
    name: 'test',
    variant: 'outlined',
    label: '',
    allowNegativeValues: false,
};

// storiesOf('Number', NumberTextField).add('State', () => {
//     const [value, setValue] = useState('change', '');

//     return <CurrencyTextField value={value} handleChange={(name, value) => setValue(value)} />;
// });
