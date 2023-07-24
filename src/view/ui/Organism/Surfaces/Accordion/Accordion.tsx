import React from 'react';
import { AccordionDetails, AccordionSummary, Box, Accordion as MuiAccordion } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export interface IAccordion {
    items: { title: React.ReactNode; description: React.ReactNode | React.ReactNode[] }[];
    startExpanded?: string | false | (() => string | false);
    elevation?: number;
}

export const Accordion = ({ items, startExpanded = false, elevation = 1 }: IAccordion) => {
    const [expanded, setExpanded] = React.useState<string | false>(startExpanded);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box>
            {items.map((d, i) => (
                <MuiAccordion expanded={expanded === `panel-${i}`} onChange={handleChange(`panel-${i}`)} disableGutters elevation={elevation}>
                    <AccordionSummary expandIcon={<ExpandMore />} aria-controls={`panel${i}a-content`} id={`panel${i}a-header`}>
                        {d.title}
                    </AccordionSummary>
                    <AccordionDetails>{d.description}</AccordionDetails>
                </MuiAccordion>
            ))}
        </Box>
    );
};
