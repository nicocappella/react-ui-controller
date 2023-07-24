import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
    title: 'React-Ui-Controller/Atoms/Data Display/Avatar',
    component: Avatar,
} as Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const NormalAvatar = Template.bind({});

NormalAvatar.args = {
    size: 'medium',
    badge: false,
};

export const SmallAvatar = Template.bind({});
SmallAvatar.args = {
    size: 'small',
    badge: false,
};

export const LargeAvatar = Template.bind({});
LargeAvatar.args = {
    size: 'large',
    badge: false,
};
