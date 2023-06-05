import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Switch } from './Switch';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Switch/Switch',
    component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const NormalSwitch = Template.bind({});

NormalSwitch.args = {};

export const LabelSwitch = Template.bind({});
LabelSwitch.args = {
    label: 'Label',
};

export const LargeSwitch = Template.bind({});
LargeSwitch.args = {};
