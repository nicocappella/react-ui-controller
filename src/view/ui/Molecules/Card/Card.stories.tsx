import { Meta, StoryFn } from '@storybook/react';

import { ArrowBack, RemoveRedEye } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '../../Atoms';
import { Card } from './Card';

export default {
    title: 'React-Ui-Controller/Molecules/Cards/Card',
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

export const HorizontalCard = Template.bind({});

HorizontalCard.args = {
    direction: 'row',
    header: {
        title: <Box width="150px" height="150px" bgcolor="grey"></Box>,
        padding: '0px',
    },
    description: {
        components: (
            <Box>
                <Typography variant="h6">Tarjeta Horizontal</Typography>
                <Typography variant="body1">Descripción</Typography>
            </Box>
        ),
        padding: '0px',
    },
    actions: (
        <Box>
            <RemoveRedEye />
        </Box>
    ),
    justifyContent: 'space-between',
    background: 'red',
    padding: '0px',
};
