import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ExtendedFAB } from './ExtendedFAB';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/ExtendedFAB',
    component: ExtendedFAB,
} as ComponentMeta<typeof ExtendedFAB>;

const Template: ComponentStory<typeof ExtendedFAB> = (args) => <ExtendedFAB {...args} />;

export const NormalExtendedFAB = Template.bind({});

NormalExtendedFAB.args = {};

export const SmallExtendedFAB = Template.bind({});
SmallExtendedFAB.args = {};

export const LargeExtendedFAB = Template.bind({});
LargeExtendedFAB.args = {};
