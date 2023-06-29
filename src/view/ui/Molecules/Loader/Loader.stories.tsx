import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Loader } from './Loader';

export default {
    title: 'React-Ui-Controller/Molecules/Loader/Loader',
    component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = (args) => <Loader {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {};
