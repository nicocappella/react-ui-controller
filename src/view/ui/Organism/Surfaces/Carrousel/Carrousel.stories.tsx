import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carrousel } from './Carrousel';
import { Home } from '@mui/icons-material';
// import { Button, LinkButton } from '../../../Atoms';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Carrousel',
    component: Carrousel,
} as ComponentMeta<typeof Carrousel>;

const Template: ComponentStory<typeof Carrousel> = (args) => <Carrousel {...args} />;

export const NormalCarrousel = Template.bind({});
NormalCarrousel.args = {
    cards: [{ img: '', text: 'Hola soy el 1', title: 'Hola soy el 1' }, { img: '', text: 'Hola soy el 2', title: 'Hola soy el 2' }],
};

export const SmallCarrousel = Template.bind({});
SmallCarrousel.args = {};

export const LargeCarrousel = Template.bind({});
LargeCarrousel.args = {};
