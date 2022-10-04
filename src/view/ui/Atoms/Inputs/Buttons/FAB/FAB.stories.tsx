import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FAB } from './FAB';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/FAB',
    component: FAB,
} as ComponentMeta<typeof FAB>;

const Template: ComponentStory<typeof FAB> = (args) => <FAB {...args} />;

export const NormalFab = Template.bind({});

NormalFab.args = {};

export const SmallFab = Template.bind({});
SmallFab.args = {};

export const LargeFab = Template.bind({});
LargeFab.args = {};
