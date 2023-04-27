import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { UploadButton } from './UploadButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/UploadButton',
    component: UploadButton,
} as Meta<typeof UploadButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof UploadButton> = (args) => <UploadButton {...args} />;

export const MultipleFiles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleFiles.args = {
    name: 'test',
    multiple: true,
    handleFiles: (files) => console.log(files),
    limit: 3,
};

export const SingleFile = Template.bind({});
SingleFile.args = { name: 'test', multiple: false, handleFiles: (files) => console.log(files) };

export const Small = Template.bind({});
Small.args = {};
