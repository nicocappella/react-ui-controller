import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
    title: 'React-Ui-Controller/Molecules/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const NormalCard = Template.bind({});

NormalCard.args = {};

export const SmallCard = Template.bind({});
SmallCard.args = {};

export const LargeCard = Template.bind({});
LargeCard.args = {};
