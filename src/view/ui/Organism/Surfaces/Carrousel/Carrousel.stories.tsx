import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carrousel } from './Carrousel';

export default {
  title: 'React-Ui-Controller/Organism/Surfaces/Carrousel',
  component: Carrousel,
} as ComponentMeta<typeof Carrousel>;

const Template: ComponentStory<typeof Carrousel> = (args) => <Carrousel {...args} />;

export const NormalCarrousel = Template.bind({});
NormalCarrousel.args = {}