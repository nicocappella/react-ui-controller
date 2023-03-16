import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/TextFields/TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const NormalTextField = Template.bind({});

NormalTextField.args = {
    variant: 'outlined',
    value: 'text',
    label: '',
    width: '60px',
    borderColor: {
        active: 'red',
        hover: 'blue',
        focused: 'primary',
    },
    
};

export const FileButton = Template.bind({});
FileButton.args = {
    type: 'file',
    label: 'Subir archivos'
};

export const LargeTextField = Template.bind({});
LargeTextField.args = {};
