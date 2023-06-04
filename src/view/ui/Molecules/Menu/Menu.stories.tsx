import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Menu } from './index';

export default {
    title: 'React-Ui-Controller/Molecules/Menu/Menu',
    component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Menu> = (args) => <Menu {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {
    
};
