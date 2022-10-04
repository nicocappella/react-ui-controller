import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Selects/DatePicker',
    component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const NormalDatePicker = Template.bind({});

NormalDatePicker.args = {};

export const SmallDatePicker = Template.bind({});
SmallDatePicker.args = {};

export const LargeDatePicker = Template.bind({});
LargeDatePicker.args = {};
