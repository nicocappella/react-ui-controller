import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from './index';

export default {
    title: 'React-Ui-Controller/Molecules/Dialog',
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {};
