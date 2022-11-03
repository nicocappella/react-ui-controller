import { PropaneSharp } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export interface IProps {
    cards: { title: string; text: string; img: React.ReactNode }[];
}

export const Carrousel = (props: IProps) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<'left' | 'right'>('right');

    const nextSlide = () => {
        setCurrent(current === props.cards.length - 1 ? 0 : current + 1);
        setDirection('left');
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? props.cards.length - 1 : current - 1);
    };

    useEffect(() => {}, [current]);
    return (
        <Box>
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
                    <ArrowBackIosIcon />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        right: 10,
                        zIndex: 10,
                        top: '50%',
                        cursor: 'pointer',
                    }}
                    onClick={nextSlide}
                >
                    <ArrowForwardIosIcon />
                </Box>
            </Box>
            <Box display="flex" sx={{ transform: `translate(${-current * 100}%)` }}>
                {props.cards.map((d, i) => (
                    <Box key={i} sx={{ minWidth: '100vw' }}>
                        <Typography variant="h5" fontWeight="bold">
                            {d.title && d.title.toUpperCase()}
                        </Typography>
                        <Typography variant="subtitle1">{d.text}</Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
