import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Selects/Select',
    component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const NormalSelect = Template.bind({});

NormalSelect.args = {
    color: 'primary',
    items: [
        { id: '1', text: 'Hola' },
        { id: '2', text: 'Chau' },
    ],
    handleChange: (e, i) => {
        console.log('render', i);
    },
};

export const SmallSelect = Template.bind({});
SmallSelect.args = {};

export const LargeSelect = Template.bind({});
LargeSelect.args = {};
