import React from 'react';
import { Tab, Tabs as MuiTabs, TabsProps } from '@mui/material';
import { Box } from '@mui/system';

export interface ITabs {
    appBarHeight?: string | number;
    centered?: boolean;
    contentPosition?: 'relative' | 'absolute';
    indicatorColor?: 'primary' | 'secondary' | undefined | string;
    left?: string | number;
    panel?: { components: React.ReactNode | React.ReactNode[]; value: string }[];
    orientation?: 'horizontal' | 'vertical';
    secondTabs?: { label: string; value: string }[];
    tabsComponent?: React.ElementType | any;
    tabs: { label: string; value: string | number; href?: string; icon?: React.ReactElement }[];
    textColor?: 'primary' | 'secondary' | 'inherit' | undefined;
    value: any;
}

const Tabs = ({
    appBarHeight,
    centered = false,
    contentPosition = 'relative',
    indicatorColor = 'primary',
    left = '0',
    panel,
    orientation = 'horizontal',
    secondTabs = [],
    tabs = [],
    tabsComponent,
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
        <Box zIndex={1000} display={orientation === 'vertical' ? 'flex' : 'block'}>
            {tabValue !== '' && appBarHeight && (
                <Box
                    height={`calc(100vh - ${appBarHeight})`}
                    width="100vw"
                    position="absolute"
                    bgcolor="rgba(0,0,0,.2)"
                    top={appBarHeight}
                    left={0}
                    zIndex={1}
                    onClick={() => setTabValue('')}
                ></Box>
            )}
            <MuiTabs
                centered={centered}
                indicatorColor={indicatorColor}
                orientation={orientation}
                onChange={handleChange}
                TabIndicatorProps={{ sx: { left: orientation === 'vertical' ? '0' : undefined, width: '4px' } }}
                textColor={textColor}
                value={tabValue}
                {...props}
            >
                {tabs.map((d, i) => (
                    <Tab
                        label={d.label}
                        key={i}
                        value={d.value}
                        LinkComponent={tabsComponent}
                        href={d.href ? d.href : ''}
                        icon={d.icon && d.icon}
                        iconPosition="top"
                        sx={{ height: appBarHeight, textTransform: 'capitalize' }}
                    />
                ))}
            </MuiTabs>
            {secondTabs && (
                <MuiTabs centered={centered} indicatorColor={indicatorColor} orientation={orientation}>
                    {secondTabs.map((d, i) => (
                        <Tab key={i} label={d.label} value={d.value} />
                    ))}
                </MuiTabs>
            )}
            <Box zIndex={999} position={contentPosition} margin="0 auto" left={left} right={appBarHeight ? 0 : undefined} width="fit-content">
                {tabPanel?.components}
            </Box>
        </Box>
    );
};

export { Tabs };
