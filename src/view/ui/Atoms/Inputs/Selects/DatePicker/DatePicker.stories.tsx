import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DatePicker } from './DatePicker';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Selects/DatePicker',
    component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const YearDatePicker = Template.bind({});

YearDatePicker.args = {
    value: new Date(2000),
    views: ['year'],
    minDate: new Date(1960),
    maxDate: new Date()    

};

export const SmallDatePicker = Template.bind({});
SmallDatePicker.args = {};

export const LargeDatePicker = Template.bind({});
LargeDatePicker.args = {};
