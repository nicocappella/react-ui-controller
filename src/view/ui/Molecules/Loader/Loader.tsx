import { Box, CircularProgress, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

export interface ILoader {
    text?: string;
}

export const Loader = ({ text = 'Cargando...' }: ILoader) => {
    const textArray = Array.from(text);
    const container = {
        hidden: { opacity: 0, transition: { staggerChildren: 0.05 } },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };
    const child = {
        visible: {
            opacity: 1,
            transition: {
                type: 'linear',
                repeat: Infinity,
                repeatDelay: 0.75,
                repeatType: 'mirror',
                duration: 1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                type: 'linear',
            },
        },
    };
    return (
        <Box display="flex" justifyContent="center" alignItems="center" gap={4}>
            <CircularProgress color="primary" size={40} />
            <Box component={motion.div} color="primary" variants={container} initial="hidden" animate="visible" display="flex">
                {textArray.map((char, index) => (
                    // @ts-ignore
                    <Typography component={motion.h4} variants={child} key={index} variant="h4" color="primary">
                        {char === ' ' ? '\u00A0' : char}
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};
