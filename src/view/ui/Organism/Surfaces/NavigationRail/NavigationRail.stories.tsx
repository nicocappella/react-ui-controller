import { ExploreOutlined, Home, Login } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, LinkButton } from '../../../Atoms';
import { NavigationRail } from './NavigationRail';

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
                components: [<Button text="Hola" variant="text" type="button" />, <Button text="Hola" variant="text" type="button" />],
            },
        },
    ],
    actions: [
        <IconButton>
            <Login />
        </IconButton>,
    ],
    background: '#F3F6FC',
    menuItems: [{ leadingText: 'Hey' }],
};

export const SmallNavigationRail = Template.bind({});
SmallNavigationRail.args = {};

export const LargeNavigationRail = Template.bind({});
LargeNavigationRail.args = {};
