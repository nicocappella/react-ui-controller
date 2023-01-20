import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BasicForm } from './BasicForm';

export default {
    title: 'React-Ui-Controller/Organism/Form/Basic Form',
    component: BasicForm,
} as ComponentMeta<typeof BasicForm>;

const Template: ComponentStory<typeof BasicForm> = (args) => <BasicForm {...args} />;

export const NormalForm = Template.bind({});

NormalForm.args = {
    
};

export const SmallCard = Template.bind({});
SmallCard.args = {};

export const LargeCard = Template.bind({});
LargeCard.args = {};
