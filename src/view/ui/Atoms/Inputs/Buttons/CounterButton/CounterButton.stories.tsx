import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { CounterButton } from './CounterButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/CounterButton',
    component: CounterButton,
} as Meta<typeof CounterButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof CounterButton> = (args) => <CounterButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: 'test',
  
};
export const UploadButton = Template.bind({});

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
