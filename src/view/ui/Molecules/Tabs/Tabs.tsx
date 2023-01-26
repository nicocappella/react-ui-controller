import React from 'react';
import { Tab, Tabs as MuiTabs, TabsProps } from '@mui/material';
import { Box } from '@mui/system';

export interface ITabs {
    color?: 'primary' | 'secondary' | undefined;
    tabs: { label: string; value: string | number; href?: string; icon?: React.ReactElement }[];
    panel?: { components: React.ReactNode | React.ReactNode[]; value: string }[];
    tabsComponents?: React.ElementType | any;
    secondTabs?: { label: string; value: string }[];
    centered: boolean;
    value: any;
}

const Tabs = ({ value, tabs, tabsComponents, panel, centered = false, secondTabs = [], color = 'primary', ...props }: ITabs & TabsProps) => {
    const [tabValue, setTabValue] = React.useState(value);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const tabPanel = panel && panel.find((d) => d.value === tabValue);
    return (
        <Box>
            <MuiTabs
                {...props}
                value={tabValue}
                onChange={handleChange}
                centered={centered ? true : undefined}
                TabIndicatorProps={{ sx: { height: '3px' } }}
                sx={{ height: '64px' }}
                textColor={color}
                indicatorColor={color}
            >
                {tabs.map((d, i) => (
                    <Tab
                        label={d.label}
                        key={i}
                        value={d.value}
                        LinkComponent={tabsComponents}
                        href={d.href ? d.href : ''}
                        icon={d.icon && d.icon}
                        iconPosition="top"
                        sx={{ height: '64px', textTransform: 'capitalize' }}
                    />
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
