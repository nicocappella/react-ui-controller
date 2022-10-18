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
        title: 'Mi tarjeta'
    },
};

export const SmallCard = Template.bind({});
SmallCard.args = {};

export const LargeCard = Template.bind({});
LargeCard.args = {};

export const CareerCard = Template.bind({});
CareerCard.args = {
  header: {
    title: 'SHAPER FOR BUSINESS'
  },
  description: 'If you are a company and would like to attrac the bes talent this is your opportunity. Join Shaper Memberships for business and enjoy the benefits',
  actions: 'button',
  direction: 'column',
  alignment:'center',
  width:'300px',
  height:'250px'
};

export const EventCard = Template.bind({});
EventCard.args = {
  header: {
    title: <h3>09</h3>,
    subheader: 'sep'
  },
  description: [<h1>Evento a desarrollarse</h1>, <p>Descripcion del evento que es va a estar dando</p>],
  alignment: 'left',
  width: '500px',
  height:'128px'
};

export const CertificateCard = Template.bind({});
CertificateCard.args = {
  header: {
    title: <h5>Certified MicroDegree for UX/UI Designer</h5>
  },
  description: [<p></p>, <br/>, ]
}

