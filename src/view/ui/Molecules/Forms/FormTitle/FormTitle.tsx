import { TextSnippet } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

export interface IFormTitle {
    icon?: {
        icon: React.ReactNode;
        background: string;
    };
    title?: string;
    subtitle?: string;
    direction?: 'column' | 'row';
}

export const FormTitle = ({
    icon = { icon: <TextSnippet color="success" />, background: '#0f0' },
    title = 'Form Title',
    subtitle,
    direction = 'row',
}: IFormTitle) => {
    return (
        <Box display="flex" flexDirection={direction} gap={1} alignItems="center" justifyContent={direction === 'column' ? 'center' : 'start'}>
            <Box bgcolor={icon.background} padding="8px" display="flex" borderRadius="100px">
                {icon.icon}
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems={direction === 'column' ? 'center' : 'start'}>
                <Typography variant="h6">{title}</Typography>
                {subtitle && (
                    <Typography variant="body2" color="GrayText">
                        {subtitle}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
