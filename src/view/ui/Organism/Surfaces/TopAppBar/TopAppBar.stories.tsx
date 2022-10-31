import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopAppBar } from './TopAppBar';
import { Button, LinkButton } from '../../../Atoms';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Top App Bar',
    component: TopAppBar,
} as ComponentMeta<typeof TopAppBar>;

const Template: ComponentStory<typeof TopAppBar> = (args) => <TopAppBar {...args} />;

export const NormalTopAppBar = Template.bind({});
NormalTopAppBar.args = {
    navButtons: [{ component: <LinkButton text="Home" color="primary" /> }, { component: <LinkButton text="Academy" color="primary" /> }],
    otherButtons: [{ component: <Button text="Sign In" type="button" variant="contained" /> }, { component: 'Log Out' }],
    background: 'transparent',
    boxShadow: '0px 0px 0px 0px',
    horizontalPadding: '200px',
};

export const SmallTopAppBar = Template.bind({});
SmallTopAppBar.args = {};

export const LargeTopAppBar = Template.bind({});
LargeTopAppBar.args = {};
