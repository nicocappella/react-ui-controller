import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { Card } from './Card';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button } from '../../Atoms';
import { ArrowBack } from '@mui/icons-material';

export default {
    title: 'React-Ui-Controller/Molecules/Card',
    component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;

export const EventCard = Template.bind({});

EventCard.args = {
    background: 'white',
    header: {
        title: <Typography variant="h5">7</Typography>,
        subheader: 'Nov',
        padding: '0px',
    },
    description: {
        components: (
            <Box key="container" display="flex" alignItems="center" justifyContent="center">
                <Box key="container" sx={{ textAlign: 'left' }}>
                    <Typography variant="h6">Diseño y desarrollo</Typography>
                    <Typography variant="body1">Dictada por Nicolas Cappella</Typography>
                </Box>
            </Box>
        ),
        padding: '0px',
    },
    padding: '0px 0px 0px 0px',
    boxShadow: '0px 2px 12px 0px #00000040',
};

export const CareerCard = Template.bind({});
CareerCard.args = {
    background: 'white',
    header: { title: <ArrowBack style={{ fontSize: '100px' }} /> },
    description: {
        components: (
            <Box key="container" display="flex" flexDirection="row" alignItems="center">
                <Typography key="text" variant="h5" textAlign="center" fontWeight="bold" sx={{ whiteSpace: 'pre-line' }}>
                    Texto
                </Typography>
            </Box>
        ),

        padding: '16px',
    },
    actions: <Button key="button" type="button" variant="contained" text="Apply" size="large" padding="16px 48px" />,
    height: '120px',
    width: '60vw',
    direction: 'row',
    boxShadow: '0px 2px 11px 0px #00000040;',
    justifyContent: 'space-between',
};
