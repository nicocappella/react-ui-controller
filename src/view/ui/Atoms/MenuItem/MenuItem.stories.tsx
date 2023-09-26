import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MenuItem } from './MenuItem';
import { ArrowForwardIos, Home } from '@mui/icons-material';
import Link from 'next/link';

export default {
    title: 'React-Ui-Controller/Atoms/MenuItem/MenuItem',
    component: MenuItem,
} as Meta<typeof MenuItem>;

const Template: StoryFn<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {
    startIcon: <Home />,
    endIcon: <ArrowForwardIos />,
};

export const LinkMenuItem = Template.bind({});

LinkMenuItem.args = {
    leadingText: 'Hola',
    LinkComponent: () => <Link href="/hola" />,
    route: '',
};
