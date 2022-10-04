import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Autocomplete } from './Autocomplete';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/TextFields/Autocomplete',
    component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => <Autocomplete {...args} />;

export const NormalAutocomplete = Template.bind({});

NormalAutocomplete.args = {};

export const SmallAutocomplete = Template.bind({});
SmallAutocomplete.args = {};

export const LargeAutocomplete = Template.bind({});
LargeAutocomplete.args = {};
