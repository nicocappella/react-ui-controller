import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from './Switch';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Switch',
    component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const NormalSwitch = Template.bind({});

NormalSwitch.args = {};

export const SmallSwitch = Template.bind({});
SmallSwitch.args = {};

export const LargeSwitch = Template.bind({});
LargeSwitch.args = {};
