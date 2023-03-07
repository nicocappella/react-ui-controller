import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu } from './index';

export default {
    title: 'React-Ui-Controller/Molecules/Menu/Menu',
    component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {};
