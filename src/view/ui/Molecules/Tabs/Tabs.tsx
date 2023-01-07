import React from 'react';
import { Tab, Tabs as MuiTabs } from '@mui/material';
import { Box } from '@mui/system';

export interface ITabs {
    value: any;
    tabs: { label: string; value: string; href?: string }[];
    tabsComponents?: React.ElementType | any;
    secondTabs?: { label: string; value: string }[];
    centered: boolean;
    panel: { components: React.ReactNode | React.ReactNode[]; value: string }[];
}

const Tabs = ({ value, tabs, tabsComponents, panel, centered = false, secondTabs = [] }: ITabs) => {
    const [tabValue, setTabValue] = React.useState(value);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const tabPanel = panel && panel.find((d) => d.value === tabValue);
    return (
        <Box>
            <MuiTabs value={tabValue} onChange={handleChange} centered={centered ? true : undefined}>
                {tabs.map((d, i) => (
                    <Tab label={d.label} key={i} value={d.value} LinkComponent={tabsComponents} href={d.value ? d.value : ''} />
                ))}
            </MuiTabs>
            {/* {secondTabs && (
                <MuiTabs>
                    {secondTabs.map((d, i) => (
                        <Tab key={i} label={d.label} value={d.value} />
                    ))}
                </MuiTabs>
            )} */}
            {tabPanel?.components}
        </Box>
    );
};

export { Tabs };
