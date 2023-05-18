import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { Button } from '../../Atoms';

export default {
    title: 'React-Ui-Controller/Molecules/Breadcrumb',
    component: Breadcrumb,
} as Meta<typeof Breadcrumb>;

const Template: StoryFn<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {};
