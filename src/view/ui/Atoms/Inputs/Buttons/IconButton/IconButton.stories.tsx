import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from '@mui/material';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/IconButton',
    component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const NormalIconButton = Template.bind({});

NormalIconButton.args = {};

export const SmallIconButton = Template.bind({});
SmallIconButton.args = {};

export const LargeIconButton = Template.bind({});
LargeIconButton.args = {};
