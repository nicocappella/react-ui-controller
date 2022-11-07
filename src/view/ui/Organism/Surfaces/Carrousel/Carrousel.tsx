import { PropaneSharp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export interface IProps {
    cards: React.ReactNode[];
    timeout?: number;
    height?: string | number;
    arrow: React.ReactNode;
}

export const Carrousel = ({ cards, timeout, height = '400px', arrow }: IProps) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const timeoutCarrousel = setTimeout(() => {
        if (timeout) {
            setCurrent(current === cards.length - 1 ? 0 : current + 1);
            setDirection('left');
        }
    }, timeout);

    const nextSlide = () => {
        setCurrent(current === cards.length - 1 ? 0 : current + 1);
        setDirection('left');
        clearTimeout(timeoutCarrousel);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? cards.length - 1 : current - 1);
        clearTimeout(timeoutCarrousel);
    };

    useEffect(() => {}, [current]);

    return (
        <Box sx={{ overflowX: 'hidden', position: 'relative' }} height={height}>
            <Box>
                <Box
                    sx={{
                        position: 'absolute',
                        left: 10,
                        zIndex: 10,
                        top: '50%',
                        cursor: 'pointer',
                    }}
                    onClick={prevSlide}
                >
                    {arrow}
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        right: 10,
                        zIndex: 10,
                        top: '50%',
                        cursor: 'pointer',
                        transform: 'rotate(180deg)',
                    }}
                    onClick={nextSlide}
                >
                    {arrow}
                </Box>
            </Box>
            <Box display="flex" sx={{ transform: `translate(${-current * 100}%)`, transition: 'ease 500ms all' }}>
                {cards.map((d, i) => (
                    <Box
                        key={i}
                        sx={{ minWidth: '100%' }}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        height={height}
                    >
                        {d}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
