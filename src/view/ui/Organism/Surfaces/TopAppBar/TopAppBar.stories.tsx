import { Box, Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, LinkButton } from '../../../Atoms';
import { TopAppBar } from './TopAppBar';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Top App Bar',
    component: TopAppBar,
} as ComponentMeta<typeof TopAppBar>;

const Template: ComponentStory<typeof TopAppBar> = (args) => <TopAppBar {...args} />;

export const NormalTopAppBar = Template.bind({});
NormalTopAppBar.args = {
    navButtons: [{ component: <LinkButton text="Home" color="primary" /> }, { component: <LinkButton text="Academy" color="primary" /> }],
    otherButtons: [{ component: <Button text="Sign In" type="button" variant="contained" /> }, { component: 'Log Out' }],
    background: 'transparent',
    boxShadow: '0px 0px 0px 0px',
    horizontalPadding: '200px',
};

export const MikeleTopBar = Template.bind({});
MikeleTopBar.args = {
    background: 'rgba(255,255,255, .2)',
    navButtons: [
        { component: <Button text="Arte" variant="text" type="button" /> },
        { component: <Button text="Diseño" variant="text" type="button" /> },
        { component: <Button text="Arquitectura" variant="text" type="button" /> },
        { component: <Button text="Contacto" variant="text" type="button" /> },
    ],
    position: 'fixed',
    height: 64,
    horizontalPadding: '200px',
};

export const LargeTopAppBar = Template.bind({});
LargeTopAppBar.args = {};

export const TopAppBarWithTabs = Template.bind({});

TopAppBarWithTabs.args = {
    alignNavBar: 'center',
    background: 'red',
    height: '96px',
    tabs: {
        color: 'primary',
        value: '',
        components: [
            {
                components: (
                    <Box border="1px solid black" width="60vw" height="500px" margin="0 auto" bgcolor="white">
                        <Typography color="primary">One</Typography>
                    </Box>
                ),
                value: '0',
            },
            {
                components: (
                    <Box border="1px solid black" width="60vw" margin="0 auto" bgcolor="white" display="flex" alignItems="center">
                        <Typography color="primary">Two</Typography>
                    </Box>
                ),
                value: '1',
            },
        ],
    },

    navButtons: [{ component: 'One' }, { component: 'Two' }],
};
