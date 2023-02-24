import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Check, CheckCircle } from './index';

export default {
    title: 'React-Ui-Controller/Atoms/Icons/Check',
    component: Check,
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args) => <Check {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {};
