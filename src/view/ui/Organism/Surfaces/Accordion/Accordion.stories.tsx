import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

import { Accordion } from './Accordion';
import { Box, Typography } from '@mui/material';
import { HomeOutlined, HomeRounded } from '@mui/icons-material';

export default {
    title: 'React-Ui-Controller/Organism/Surfaces/Accordion',
    component: Accordion,
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => (
    <Box width="260px">
        <Accordion {...args} />
    </Box>
);

export const NormalAccordion = Template.bind({});

NormalAccordion.args = {
    items: [
        {
            title: <Typography variant="h6">First Accordion</Typography>,
            description: <Typography variant="body1">Text in the first Accordion</Typography>,
        },
        {
            title: <Typography variant="h6">Second Accordion</Typography>,
            description: <Typography variant="body1">Text in the second Accordion</Typography>,
        },
    ],
    elevation: 0,
};

export const SidebarMenu = Template.bind({});
SidebarMenu.args = {
    items: [
        {
            title: (
                <Box display="flex" flexDirection="row" gap="8px">
                    <HomeRounded />
                    <Typography variant="button" textTransform="none">
                        First Accordion
                    </Typography>
                </Box>
            ),
            description: (
                <Accordion
                    paddingRight="0px"
                    items={[
                        {
                            title: (
                                <Box display="flex" flexDirection="row" gap="8px">
                                    <HomeRounded />
                                    <Typography variant="button" textTransform="none">
                                        First SubAccordion
                                    </Typography>
                                </Box>
                            ),
                            description: (
                                <>
                                    <Box display="flex" flexDirection="row" gap="8px" pl="24px" height="48px" alignItems="center">
                                        <HomeRounded />
                                        <Typography variant="button" textTransform="none">
                                            Second Accordion
                                        </Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="row" gap="8px" pl="24px" height="48px" alignItems="center">
                                        <HomeRounded />
                                        <Typography variant="button" textTransform="none">
                                            Second Accordion
                                        </Typography>
                                    </Box>
                                </>
                            ),
                        },
                    ]}
                    elevation={0}
                ></Accordion>
            ),
        },
        {
            title: (
                <Box display="flex" flexDirection="row" gap="8px">
                    <HomeRounded />
                    <Typography variant="button" textTransform="none">
                        Second Accordion
                    </Typography>
                </Box>
            ),
            description: (
                <>
                    <Box display="flex" flexDirection="row" gap="8px" pl="24px" height="48px" alignItems="center">
                        <HomeRounded />
                        <Typography variant="button" textTransform="none">
                            Second Accordion
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row" gap="8px" pl="24px" height="48px" alignItems="center">
                        <HomeRounded />
                        <Typography variant="button" textTransform="none">
                            Second Accordion
                        </Typography>
                    </Box>
                </>
            ),
        },
    ],
    elevation: 0,
};

export const LargeAccordion = Template.bind({});
LargeAccordion.args = {};
