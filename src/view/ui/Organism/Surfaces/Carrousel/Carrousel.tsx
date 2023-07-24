import { ArrowBack, ChevronLeft } from '@mui/icons-material';
import { Box, BoxProps, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export interface ICarrousel {
    cards: React.ReactNode[];
    timeout?: number;
    height?: string | number;
    arrow?: React.ReactNode;
}

export const Carrousel = ({
    cards,
    timeout,
    height = '400px',
    arrow = <ChevronLeft color="primary" sx={{ height: 48, width: 48 }} />,
    ...props
}: ICarrousel & BoxProps) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const nextSlide = () => {
        setCurrent(current === cards.length - 1 ? 0 : current + 1);
        setDirection('left');
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? cards.length - 1 : current - 1);
        setDirection('right');
    };

    useEffect(() => {
        const timeoutCarrousel = setTimeout(() => {
            if (timeout) {
                setCurrent(current === cards.length - 1 ? 0 : current + 1);
                setDirection('left');
            }
        }, timeout);
        return () => {
            clearTimeout(timeoutCarrousel);
        };
    }, [current]);

    return (
        <Box {...props} sx={{ position: 'relative', overflow: 'hidden' }} height={height} width="100vw">
            <Box
                sx={{
                    position: 'absolute',
                    left: 20,
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
                    right: 20,
                    zIndex: 10,
                    top: '50%',
                    cursor: 'pointer',
                    transform: 'rotate(180deg)',
                }}
                onClick={nextSlide}
            >
                {arrow}
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
                        position="relative"
                        zIndex={-1}
                    >
                        {d}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
