import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    variant: 'contained',
    uploadButton: {
        multiple: true,
        type: 'images/*',
    },
};
export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'outlined',
};

export const Large = Template.bind({});
Large.args = {};

export const Small = Template.bind({});
Small.args = {};
