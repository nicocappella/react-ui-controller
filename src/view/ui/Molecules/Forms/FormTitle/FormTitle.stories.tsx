import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FormTitle } from './FormTitle';

export default {
    title: 'React-Ui-Controller/Molecules/Form/FormTitle',
    component: FormTitle,
} as Meta<typeof FormTitle>;

const Template: StoryFn<typeof FormTitle> = (args) => <FormTitle {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {};
