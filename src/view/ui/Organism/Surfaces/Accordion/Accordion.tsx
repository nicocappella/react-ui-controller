import React from 'react';
import { AccordionDetails, AccordionSummary, Box, Accordion as MuiAccordion } from '@mui/material';
import { ChevronRightRounded } from '@mui/icons-material';

export interface IAccordion {
    items: { title: React.ReactNode; description: React.ReactNode | React.ReactNode[] }[];
    startExpanded?: string | false | (() => string | false);
    elevation?: number;
    divider?: boolean;
    paddingRight?: string;
}

export const Accordion = ({ items, startExpanded = false, elevation = 1, divider = false, paddingRight = '16px' }: IAccordion) => {
    const [expanded, setExpanded] = React.useState<string | false>(startExpanded);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    const accordion = (d: { title: React.ReactNode; description: React.ReactNode | React.ReactNode[] }, i: number) => (
        <MuiAccordion
            expanded={expanded === `panel-${i}`}
            onChange={handleChange(`panel-${i}`)}
            disableGutters
            elevation={elevation}
            sx={{
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                    transform: 'rotate(90deg)',
                },
            }}
        >
            <AccordionSummary
                expandIcon={<ChevronRightRounded />}
                aria-controls={`panel${i}a-content`}
                id={`panel${i}a-header`}
                sx={{ paddingRight }}
            >
                {d.title}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: '0 16px' }}>{d.description}</AccordionDetails>
        </MuiAccordion>
    );

    return (
        <Box>
            {items.map((d, i) => (
                <>{!divider ? <Box>{accordion(d, i)}</Box> : accordion(d, i)}</>
            ))}
        </Box>
    );
};
