import { Box, BoxProps } from '@mui/system';
import { AnimatePresence, motion } from 'framer-motion';
import React, { MouseEventHandler } from 'react';
import { IMenuItem } from '../../../Atoms/MenuItem/MenuItem';
import { Menu } from '../../../Molecules/Menu';

export interface IProps {
    navButtons: { component: React.ReactNode; layer?: { components?: React.ReactNode[] } }[];
    actions?: React.ReactNode[];
    menuItems?: IMenuItem[];
    background?: string;
}

export const NavigationRail = ({ navButtons, actions, menuItems, background = 'white', ...props }: IProps & BoxProps) => {
    const [openPanel, setOpenPanel] = React.useState<boolean[]>([false]);
    const [openMenuSettings, setOpenMenuSettings] = React.useState<null | HTMLElement>(null);
    const openMenu = Boolean(openMenuSettings);

    React.useEffect(() => {
        const layers = navButtons.map((d) => false);
        setOpenPanel(layers);
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number): void => {
        const layers = navButtons.map((d, j) => {
            if (i === j && d.layer !== undefined) {
                return true;
            } else return false;
        });
        setOpenPanel(layers);
    };
    const handleMouseLeave = (e: React.MouseEventHandler<HTMLDivElement>, i: number): void => {
        const layers = navButtons.map((d) => false);
        setOpenPanel(layers);
    };
    const handleOpenMenuSettings = (e: React.MouseEvent<HTMLElement>) => {
        setOpenMenuSettings(e.currentTarget);
    };
    const handleCloseMenuSettings = (e: React.MouseEvent<HTMLElement>) => {
        setOpenMenuSettings(null);
    };
    return (
        <Box position="relative">
            <Box
                {...props}
                display="flex"
                flexDirection="column"
                position="fixed"
                width="100px"
                justifyContent="space-between"
                bgcolor={background}
                gap="2%"
                height="100vh"
                onMouseLeave={(event: React.MouseEventHandler<HTMLDivElement>, i: number) => handleMouseLeave(event, i)}
                component="div"
                zIndex={1000}
            >
                <Box display="flex" flexDirection="column" pt="20px" position="relative" zIndex={999}>
                    {navButtons.map((d, i: number) => (
                        <Box
                            key={i}
                            onMouseEnter={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleMouseEnter(event, i)}
                            component="div"
                        >
                            {d.component}
                        </Box>
                    ))}
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" pb="20px" position="relative" zIndex={999}>
                    {actions &&
                        actions.map((d, i) => (
                            <Box key={i} onClick={handleOpenMenuSettings}>
                                {actions}
                            </Box>
                        ))}
                    {menuItems && menuItems?.length > 0 && (
                        <Menu
                            items={menuItems}
                            anchorEl={openMenuSettings}
                            handleClose={handleCloseMenuSettings}
                            open={openMenu}
                            anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                        />
                    )}
                </Box>
                <AnimatePresence>
                    {openPanel.includes(true) && (
                        <Box
                            height="100vh"
                            width="200px"
                            position="absolute"
                            ml="100px"
                            top="0px"
                            left="0px"
                            bgcolor={background}
                            component={motion.div}
                            initial={{ opacity: 0, width: '0px' }}
                            animate={{ opacity: 1, width: '200px' }}
                            exit={{ opacity: 0, width: '0px' }}
                            transition={{ ease: 'easeIn', duration: 0.5 }}
                        >
                            {navButtons.map(
                                (d, i) =>
                                    d.layer && (
                                        <Box
                                            flexDirection="column"
                                            position="absolute"
                                            alignItems="left"
                                            display={openPanel![i] ? 'flex' : 'none'}
                                            key={i}
                                            component={motion.div}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ ease: 'easeIn', duration: 0.5, delay: 0.25 }}
                                        >
                                            {d.layer.components!.map((e, j) => e)}
                                        </Box>
                                    ),
                            )}
                        </Box>
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    );
};
