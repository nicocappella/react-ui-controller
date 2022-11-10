import { Box } from '@mui/system';
import React from 'react';

export interface IProps {
    navButtons: { component: React.ReactNode; layer?: { components?: React.ReactNode[] } }[];
    actions?: React.ReactNode[];
    background?: string;
}

export const NavigationRail = ({ navButtons, actions, background = 'white' }: IProps) => {
    const [openPanel, setOpenPanel] = React.useState<boolean[]>([false]);

    React.useEffect(() => {
        const layers = navButtons.map((d) => false);
        setOpenPanel(layers);
    }, []);

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, i: number): void => {
        const layers = navButtons.map((d, j) => {
            if (i === j) {
                return true;
            } else return false;
        });
        setOpenPanel(layers);
    };
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, i: number): void => {
        const layers = navButtons.map((d) => false);
        setOpenPanel(layers);
    };
    console.log(openPanel);
    return (
        <Box position="relative">
            <Box
                display="flex"
                flexDirection="column"
                position="fixed"
                width="100px"
                justifyContent="space-between"
                bgcolor={background}
                gap="2%"
                height="100vh"
                onMouseLeave={(event: React.MouseEvent<HTMLDivElement>, i: number) => handleMouseLeave(event, i)}
                component="div"
                zIndex={1000}
            >
                <Box display="flex" flexDirection="column">
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
                <Box display="flex" flexDirection="column" alignItems="center">
                    {actions && actions.map((d, i) => <Box key={i}>{actions}</Box>)}
                </Box>
                <Box height="100vh" width="200px" position="absolute" ml="100px" bgcolor={openPanel.includes(true) ? background : 'transparent'}>
                    {navButtons.map(
                        (d, i) =>
                            d.layer && (
                                <Box flexDirection="column" position="absolute" alignItems="center" display={openPanel![i] ? 'flex' : 'none'}>
                                    {d.layer.components!.map((e, j) => e)}
                                </Box>
                            ),
                    )}
                </Box>
            </Box>
        </Box>
    );
};
