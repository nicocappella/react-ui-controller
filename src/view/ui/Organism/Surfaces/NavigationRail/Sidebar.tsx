import { Box, Typography } from '@mui/material';
import React from 'react';
import { Accordion } from '../Accordion/Accordion';
import { Menu } from '../../../Molecules/Menu';
import { MenuItem } from '../../../Atoms/MenuItem/MenuItem';

export interface ISidebar {
    sideMenus: {
        title?: string;
        menus: {
            text: string;
            icon: React.ReactNode;
            route?: string;
            expandable?: boolean;
            children?: {
                text: string;
                icon: React.ReactNode;
                route?: string;
                expandable?: boolean;
                children?: { text: string; icon: React.ReactNode }[];
            }[];
        }[];
    }[];
    LinkComponent: React.ElementType<any>;
}
export const Sidebar = ({ sideMenus, LinkComponent }: ISidebar) => {
    const expandableMenu = (
        text: string,
        icon: React.ReactNode,
        children?: {
            text: string;
            icon: React.ReactNode;
            expandable?: boolean;
            route?: string;
            children?: { text: string; icon: React.ReactNode; route?: string }[];
        }[],
    ) => (
        <Accordion
            items={[
                {
                    title: (
                        <Box display="flex" flexDirection="row" gap="12px">
                            {icon}
                            <Typography variant="button" textTransform="none">
                                {text}
                            </Typography>
                        </Box>
                    ),
                    description: (
                        <>
                            {children?.map((d, i) => (
                                <>
                                    {d.expandable ? (
                                        <Accordion
                                            items={[
                                                {
                                                    title: (
                                                        <Box display="flex" flexDirection="row" gap="12px">
                                                            {icon}
                                                            <Typography variant="button" textTransform="none">
                                                                {text}
                                                            </Typography>
                                                        </Box>
                                                    ),
                                                    description: d.children?.map((e, i) => (
                                                        <MenuItem
                                                            startIcon={e.icon}
                                                            leadingText={e.text}
                                                            route={e.route ? e.route : ''}
                                                            LinkComponent={LinkComponent}
                                                        />
                                                    )),
                                                },
                                            ]}
                                            elevation={0}
                                            paddingRight="0px"
                                        ></Accordion>
                                    ) : (
                                        <MenuItem
                                            startIcon={d.icon}
                                            leadingText={d.text}
                                            route={d.route ? d.route : ''}
                                            LinkComponent={LinkComponent}
                                        />
                                    )}
                                </>
                            ))}
                        </>
                    ),
                },
            ]}
            elevation={0}
        ></Accordion>
    );
    return (
        <Box width="260px">
            {sideMenus.map(({ title, menus }, i) => {
                return (
                    <>
                        {title && (
                            <Typography variant="caption" textTransform="uppercase" fontWeight={700}>
                                {title}
                            </Typography>
                        )}
                        {menus.map(({ text, icon, expandable, children, route }, i) => {
                            if (expandable) {
                                return expandableMenu(text, icon, children);
                            } else {
                                return <MenuItem startIcon={icon} leadingText={text} route={route ? route : ''} LinkComponent={LinkComponent} />;
                            }
                        })}
                    </>
                );
            })}
        </Box>
    );
};
