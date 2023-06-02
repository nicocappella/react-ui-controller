import React, { SVGProps } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

export const Check = (props: SVGMotionProps<SVGSVGElement>) => {
    const draw = {
        initial: {
            pathLength: 0,
        },
        visible: {
            pathLength: 1,
            transition: {
                duration: 1,
                delay: 0.5,
                type: 'easeIn',
            },
        },
    };
    return (
        <motion.svg
            {...props}
            width={48}
            height={48}
            viewBox="0 96 960 960"
            xmlns="http://www.w3.org/2000/svg"
            variants={draw}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <motion.path d="m176.14 517.61 202.52 202.64 405.1-406.28" fill="none" stroke="#000" strokeWidth={60} variants={draw} />
        </motion.svg>
    );
};
