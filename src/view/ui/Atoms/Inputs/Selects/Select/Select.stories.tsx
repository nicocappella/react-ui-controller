import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Selects/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const NormalSelect = Template.bind({});

NormalSelect.args = {};

export const SmallSelect = Template.bind({});
SmallSelect.args = {};

export const LargeSelect = Template.bind({});
LargeSelect.args = {};
