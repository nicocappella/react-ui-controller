import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationRail } from './NavigationRail';
import { Home } from '@mui/icons-material';
// import { Button, LinkButton } from '../../../Atoms';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Navigation Rail',
    component: NavigationRail,
} as ComponentMeta<typeof NavigationRail>;

const Template: ComponentStory<typeof NavigationRail> = (args) => <NavigationRail {...args} />;

export const NormalNavigationRail = Template.bind({});
NormalNavigationRail.args = {
    navButtons: [
        { text: 'Home', icon: <Home /> },
        { text: 'Home', icon: <Home /> },
    ],
};

export const SmallNavigationRail = Template.bind({});
SmallNavigationRail.args = {};

export const LargeNavigationRail = Template.bind({});
LargeNavigationRail.args = {};
