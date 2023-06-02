import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Check, CheckCircle } from './index';

export default {
    title: 'React-Ui-Controller/Atoms/Icons/Check',
    component: Check,
} as Meta<typeof Check>;

const Template: StoryFn<typeof Check> = (args) => <Check {...args} />;

export const AnimatedCheck = Template.bind({});

AnimatedCheck.args = {};
