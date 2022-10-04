import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField'

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/TextFields/TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const NormalTextField = Template.bind({});

NormalTextField.args = {};

export const SmallTextField = Template.bind({});
SmallTextField.args = {};

export const LargeTextField = Template.bind({});
LargeTextField.args = {};
