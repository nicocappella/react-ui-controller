import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavigationDrawer } from './NavigationDrawer';
import { Button, LinkButton } from '../../../Atoms';
import { Home } from '@mui/icons-material';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Navigation Drawer',
    component: NavigationDrawer,
} as ComponentMeta<typeof NavigationDrawer>;

const Template: ComponentStory<typeof NavigationDrawer> = (args) => <NavigationDrawer {...args} />;

export const NormalNavigationDrawer = Template.bind({});
NormalNavigationDrawer.args = {
    navButtons: [{ icon: <Home />, text: 'Home' }],
};
