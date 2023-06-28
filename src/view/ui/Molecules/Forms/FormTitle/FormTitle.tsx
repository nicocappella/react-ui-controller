import { TinyColor } from '@ctrl/tinycolor';
import { TextSnippet } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

export interface IFormTitle {
    icon?: {
        icon: React.ReactNode;
        background?: 'darken' | 'lighten';
    };
    title?: string;
    subtitle?: string;
    direction?: 'column' | 'row';
}

export const FormTitle = ({
    icon = { icon: <TextSnippet color="success" />, background: 'lighten' },
    title = 'Form Title',
    subtitle,
    direction = 'row',
}: IFormTitle) => {
    const ref = React.useRef<HTMLButtonElement>(null);
    const [backgroundColor, setBackgroundColor] = React.useState('transparent');
    React.useEffect(() => {
        if (ref.current) {
            if (icon.background) {
                const color = window.getComputedStyle(ref.current.children[0]).getPropertyValue('color');
                const bgcolor = new TinyColor(color)[icon.background](40).toString();
                setBackgroundColor(bgcolor);
            }
        }
    }, [ref]);
    return (
        <Box display="flex" flexDirection={direction} gap={1} alignItems="center" justifyContent={direction === 'column' ? 'center' : 'start'}>
            <Box padding="8px" display="flex" borderRadius="100px" ref={ref} sx={{ backgroundColor }}>
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
