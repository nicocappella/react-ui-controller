import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopAppBar } from './TopAppBar';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Top App Bar',
    component: TopAppBar,
} as ComponentMeta<typeof TopAppBar>;

const Template: ComponentStory<typeof TopAppBar> = (args) => <TopAppBar {...args} />;

export const NormalTopAppBar = Template.bind({});
NormalTopAppBar.args = {
    // logo: LogoFile,
    navButtons: ['Home', 'Who', 'Where', 'How'],
    background: 'transparent',
    boxShadow: '0px 0px 0px 0px',
};

export const SmallTopAppBar = Template.bind({});
SmallTopAppBar.args = {};

export const LargeTopAppBar = Template.bind({});
LargeTopAppBar.args = {};
