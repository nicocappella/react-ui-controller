import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Checkbox/Checkbox',
    component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const NormalDatePicker = Template.bind({});

NormalDatePicker.args = {};

export const SmallDatePicker = Template.bind({});
SmallDatePicker.args = {};

export const LargeDatePicker = Template.bind({});
LargeDatePicker.args = {};
