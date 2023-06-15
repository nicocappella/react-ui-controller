import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { IconButton } from './IconButton';
import { Person } from '@mui/icons-material';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/IconButton',
    component: IconButton,
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const NormalIconButton = Template.bind({});

NormalIconButton.args = {
    children: <Person />,
    background: 'lighten',
};

export const SmallIconButton = Template.bind({});
SmallIconButton.args = {};

export const LargeIconButton = Template.bind({});
LargeIconButton.args = {};
