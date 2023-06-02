import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Home } from '@mui/icons-material';
import { NavigationDrawer } from './NavigationDrawer';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Navigation Drawer',
    component: NavigationDrawer,
} as ComponentMeta<typeof NavigationDrawer>;

const Template: ComponentStory<typeof NavigationDrawer> = (args) => <NavigationDrawer {...args} />;

export const NormalNavigationDrawer = Template.bind({});
NormalNavigationDrawer.args = {
    navButtons: [{ icon: <Home />, text: 'Home', route: { href: '/', wrapper: 'a' } }],
    color: 'red',
    background: '#fff',
};
