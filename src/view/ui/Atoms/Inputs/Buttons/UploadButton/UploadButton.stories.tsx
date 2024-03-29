import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { FileProps, UploadButton } from './UploadButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Buttons/UploadButton',
    component: UploadButton,
} as Meta<typeof UploadButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof UploadButton & FileProps> = (args) => <UploadButton {...args} />;

export const MultipleFiles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MultipleFiles.args = {
    name: 'test',
    multiple: true,
    handleChange: (files) => console.log(files),
    limit: 8,
};

export const SingleFile = Template.bind({});
SingleFile.args = { name: 'test' };

export const NotImageFile = Template.bind({});
NotImageFile.args = {
    type: '.xlsx',
};
