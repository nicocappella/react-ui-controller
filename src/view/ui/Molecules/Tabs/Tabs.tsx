import React from 'react';
import { Tab, Tabs as MuiTabs, TabsProps } from '@mui/material';
import { Box } from '@mui/system';

export interface ITabs {
    centered?: boolean;
    contentPosition: 'relative' | 'absolute';
    indicatorColor?: 'primary' | 'secondary' | undefined | string;
    left?: string | number;
    panel?: { components: React.ReactNode | React.ReactNode[]; value: string }[];
    secondTabs?: { label: string; value: string }[];
    tabsComponents?: React.ElementType | any;
    tabs: { label: string; value: string | number; href?: string; icon?: React.ReactElement }[];
    textColor?: 'primary' | 'secondary' | 'inherit' | undefined;
    value: any;
}

const Tabs = ({
    centered = false,
    contentPosition = 'relative',
    indicatorColor = 'primary',
    left = '0',
    panel,
    secondTabs = [],
    tabs,
    tabsComponents,
    textColor = 'primary',
    value,
    ...props
}: ITabs & TabsProps) => {
    const [tabValue, setTabValue] = React.useState(value);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setTabValue(newValue);
    };
    const tabPanel = panel && panel.find((d) => d.value === tabValue);
    return (
        <Box zIndex={1000}>
            <MuiTabs
                value={tabValue}
                onChange={handleChange}
                centered={centered ? true : undefined}
                TabIndicatorProps={{ sx: { height: '3px' } }}
                sx={{ height: '64px' }}
                textColor={textColor}
                indicatorColor={indicatorColor}
                {...props}
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
            <Box zIndex={999} position={contentPosition} left={left} width="100vw">
                {tabPanel?.components}
            </Box>
        </Box>
    );
};

export { Tabs };
