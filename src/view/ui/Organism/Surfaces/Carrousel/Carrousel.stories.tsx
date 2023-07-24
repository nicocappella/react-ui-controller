import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Carrousel } from './Carrousel';
import { ArrowBack, Home } from '@mui/icons-material';
import { Box } from '@mui/material';
// import { Button, LinkButton } from '../../../Atoms';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Carrousel',
    component: Carrousel,
} as Meta<typeof Carrousel>;

const Template: StoryFn<typeof Carrousel> = (args) => <Carrousel {...args} />;

export const NormalCarrousel = Template.bind({});
NormalCarrousel.args = {
    cards: [<Box>Number1</Box>, <Box>Number2</Box>, <Box>Number3</Box>, <Box>Number4</Box>],
    // timeout: 4000,
    // arrow: <ArrowBack />,
};

export const SmallCarrousel = Template.bind({});
SmallCarrousel.args = {};

export const LargeCarrousel = Template.bind({});
LargeCarrousel.args = {};
