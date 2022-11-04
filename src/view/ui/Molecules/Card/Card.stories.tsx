import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
    title: 'React-Ui-Controller/Molecules/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const NormalCard = Template.bind({});

NormalCard.args = {
    header: {
        title: 'Mi tarjeta',
    },
};

export const SmallCard = Template.bind({});
SmallCard.args = {};

export const LargeCard = Template.bind({});
LargeCard.args = {};

export const CareerCard = Template.bind({});
CareerCard.args = {
    header: {
        title: 'SHAPER FOR BUSINESS',
        padding: '0px',
    },
    description: {
        components: [
            'If you are a company and would like to attrac the bes talent this is your opportunity. Join Shaper Memberships for business and enjoy the benefits',
        ],
        padding: '0px',
    },
    actions: 'button',
    direction: 'column',
    alignment: 'center',
    padding: '0px',
    background: 'transparent',
    elevated: true,
};
