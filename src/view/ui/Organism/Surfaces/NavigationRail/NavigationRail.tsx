import { Box } from '@mui/system';
import React from 'react';
import { LinkButton, IconButton } from '../../../Atoms';
import { darken } from '@mui/system';

export interface IProps {
    navButtons: { text: string; icon: React.ReactNode }[];
}

export const NavigationRail = ({ navButtons }: IProps) => {
    return (
        <Box display="flex" flexDirection="column" position="fixed" width="80px" bgcolor="#f0eddd" gap='2%'>
            {navButtons.map((d, i) => (
                <Box
                    display="flex"
                    flexDirection="column"
                    key={i}
                    alignItems="center"
                    sx={{ '&:hover button': { backgroundColor: '#ddd' }, '&:hover a': { color: darken('#999', 1) } }}
                >
                    <IconButton>{d.icon}</IconButton>
                    <LinkButton text={d.text} color="#999" href="home" />
                </Box>
            ))}
        </Box>
    );
};
