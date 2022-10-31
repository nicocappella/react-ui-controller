import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkButton } from './LinkButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/LinkButton',
    component: LinkButton,
} as ComponentMeta<typeof LinkButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'Link',
    color: 'primary',
};
export const Secondary = Template.bind({});
Secondary.args = {};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
