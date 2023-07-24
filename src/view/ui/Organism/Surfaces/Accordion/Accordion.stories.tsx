import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Accordion } from './Accordion';
import { Typography } from '@mui/material';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Accordion',
    component: Accordion,
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const NormalAccordion = Template.bind({});

NormalAccordion.args = {
    items: [
        {
            title: <Typography variant="h6">First Accordion</Typography>,
            description: <Typography variant="body1">Text in the first Accordion</Typography>,
        },
        {
            title: <Typography variant="h6">Second Accordion</Typography>,
            description: <Typography variant="body1">Text in the second Accordion</Typography>,
        },
    ],
};

export const SmallAccordion = Template.bind({});
SmallAccordion.args = {};

export const LargeAccordion = Template.bind({});
LargeAccordion.args = {};
