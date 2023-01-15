import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavigationRail } from './NavigationRail';
import { ExploreOutlined, Home, Login } from '@mui/icons-material';
import { Button, LinkButton } from '../../../Atoms';
import { Box } from '@mui/system';
import { IconButton } from '@mui/material';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Navigation Rail',
    component: NavigationRail,
} as ComponentMeta<typeof NavigationRail>;

const Template: ComponentStory<typeof NavigationRail> = (args) => <NavigationRail {...args} />;

export const NormalNavigationRail = Template.bind({});
NormalNavigationRail.args = {
    navButtons: [
        {
            component: (
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                >
                    <IconButton>
                        <Home />
                    </IconButton>
                    <LinkButton text="Home" />
                </Box>
            ),
        },
        {
            component: (
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: '#ccc' } }}
                >
                    <IconButton>
                        <ExploreOutlined />
                    </IconButton>
                    <LinkButton text="Get started" />
                </Box>
            ),
            layer: {
                components: [<Button text="Hola" variant="text" />, <Button text="Hola" variant="text" />],
            },
        },
    ],
    actions: [
        <IconButton>
            <Login />
        </IconButton>,
    ],
    background: '#F3F6FC',
};

export const SmallNavigationRail = Template.bind({});
SmallNavigationRail.args = {};

export const LargeNavigationRail = Template.bind({});
LargeNavigationRail.args = {};
