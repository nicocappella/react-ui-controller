import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tabs } from './Tabs';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default {
    title: 'React-Ui-Controller/Molecules/Navigation/Tabs/Tabs',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 'one',
    tabs: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
    ],
    secondTabs: [
        { label: 'One', value: 'one' },
        { label: 'Two', value: 'two' },
        { label: 'Three', value: 'three' },
    ],
    panel: [
        { components: <Box>Soy el 1</Box>, value: 'one' },
        {
            components: (
                <Box>
                    <Typography>Soy el 2</Typography>
                </Box>
            ),
            value: 'two',
        },
        {
            components: (
                <Box>
                    <Typography>Soy el 3</Typography>
                </Box>
            ),
            value: 'three',
        },
    ],
};
