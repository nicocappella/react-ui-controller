import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab } from '@mui/material';
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

export const MikeleTopBar = Template.bind({});
MikeleTopBar.args = {
    background: 'rgba(255,255,255, .2)',
    navButtons: [
        { component: <Button text="Arte" variant="text" type="button" /> },
        { component: <Button text="Diseño" variant="text" type="button" /> },
        { component: <Button text="Arquitectura" variant="text" type="button" /> },
        { component: <Button text="Contacto" variant="text" type="button" /> },
    ],
    position: 'fixed',
    height: 64,
    horizontalPadding: '200px',
};

export const LargeTopAppBar = Template.bind({});
LargeTopAppBar.args = {};

export const TopAppBarWithTabs = Template.bind({});

TopAppBarWithTabs.args = {
    background: 'red',
    height: 64,
    tabsValue: { value: 0 },
    navButtons: [{ component: 'One' }, { component: 'Two' }],
};
