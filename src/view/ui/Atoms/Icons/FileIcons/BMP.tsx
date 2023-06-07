import React, { SVGProps } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface BMPProps {}

export const BMP = (props: SVGMotionProps<SVGSVGElement> & BMPProps) => {
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
        <motion.svg {...props} width="200" height="241" viewBox="0 0 200 241" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3">
                <path
                    opacity="0.3"
                    d="M140.53 49.24C135.061 49.2373 129.817 47.0644 125.949 43.1982C122.081 39.3321 119.905 34.0889 119.9 28.62V0H27.77C24.2353 -2.4406e-07 20.7353 0.696337 17.4697 2.04932C14.2042 3.4023 11.2372 5.38537 8.73828 7.88525C6.23933 10.3851 4.25729 13.3529 2.90552 16.6189C1.55375 19.8849 0.858796 23.3853 0.860109 26.92V189.13C0.858796 192.665 1.55375 196.165 2.90552 199.431C4.25729 202.697 6.23933 205.665 8.73828 208.165C11.2372 210.665 14.2042 212.648 17.4697 214.001C20.7353 215.354 24.2353 216.05 27.77 216.05H138.37C141.905 216.05 145.405 215.354 148.67 214.001C151.936 212.648 154.903 210.665 157.402 208.165C159.901 205.665 161.883 202.697 163.234 199.431C164.586 196.165 165.281 192.665 165.28 189.13V49.25L140.53 49.24Z"
                    fill="#A140FF"
                />
            </g>
            <path
                d="M165.28 49.24H140.53C135.061 49.2373 129.817 47.0644 125.949 43.1982C122.081 39.3321 119.905 34.0889 119.9 28.62V0L165.28 49.24Z"
                fill="#A140FF"
            />
            <path
                d="M184.8 170.6H59.76C50.8903 170.6 43.7 177.79 43.7 186.66V223.94C43.7 232.81 50.8903 240 59.76 240H184.8C193.67 240 200.86 232.81 200.86 223.94V186.66C200.86 177.79 193.67 170.6 184.8 170.6Z"
                fill="#A140FF"
            />
            <path d="M79.46 213.37V220.65H71.9299V213.37H79.46Z" fill="white" />
            <path
                d="M105.6 207.8C106.655 209.114 107.217 210.755 107.19 212.44C107.242 213.569 107.038 214.696 106.593 215.735C106.148 216.774 105.473 217.699 104.62 218.44C102.9 219.88 100.44 220.61 97.24 220.61H83.24V190.54H96.8899C99.9499 190.54 102.317 191.207 103.99 192.54C104.827 193.226 105.49 194.1 105.926 195.09C106.362 196.08 106.559 197.16 106.5 198.24C106.563 199.872 106.054 201.474 105.06 202.77C104.108 203.972 102.769 204.806 101.27 205.13C102.977 205.498 104.505 206.44 105.6 207.8ZM90.52 202.87H95.28C97.8067 202.87 99.0701 201.79 99.0701 199.63C99.0701 197.47 97.78 196.393 95.2 196.4H90.52V202.87ZM99.75 211.42C99.7733 210.946 99.6903 210.473 99.5068 210.035C99.3234 209.597 99.0442 209.206 98.6899 208.89C97.8327 208.233 96.7679 207.907 95.6899 207.97H90.54V214.73H95.73C98.41 214.73 99.75 213.627 99.75 211.42Z"
                fill="white"
            />
            <path
                d="M144.83 190.79V220.65H137.56V202L131.1 220.68H124.8L118.29 201.96V220.68H111V190.82H119.89L128.01 211.62L136.01 190.82L144.83 190.79Z"
                fill="white"
            />
            <path
                d="M157.13 210.1V220.65H149.85V190.58H161.63C165.21 190.58 167.933 191.463 169.8 193.23C170.746 194.16 171.485 195.28 171.969 196.515C172.454 197.751 172.672 199.075 172.61 200.4C172.642 202.149 172.207 203.875 171.35 205.4C170.485 206.895 169.188 208.094 167.63 208.84C165.759 209.732 163.702 210.164 161.63 210.1H157.13ZM165.21 200.4C165.21 197.733 163.75 196.4 160.83 196.4H157.13V204.23H160.83C163.75 204.257 165.21 202.98 165.21 200.4Z"
                fill="white"
            />
            <path
                d="M105.16 146.41H61C56.6759 146.405 52.5305 144.685 49.4729 141.627C46.4153 138.57 44.6952 134.424 44.6899 130.1V85.9301C44.6952 81.606 46.4153 77.4605 49.4729 74.403C52.5305 71.3454 56.6759 69.6253 61 69.62H105.17C109.493 69.6253 113.638 71.3457 116.694 74.4036C119.75 77.4614 121.467 81.6069 121.47 85.9301V130.1C121.467 134.425 119.748 138.572 116.69 141.63C113.632 144.688 109.485 146.407 105.16 146.41ZM61 76.83C58.5873 76.8326 56.2744 77.7923 54.5684 79.4983C52.8624 81.2043 51.9025 83.5174 51.8999 85.9301V130.1C51.9025 132.513 52.8624 134.826 54.5684 136.532C56.2744 138.238 58.5873 139.197 61 139.2H105.17C107.581 139.195 109.891 138.234 111.595 136.528C113.299 134.822 114.257 132.511 114.26 130.1V85.9301C114.257 83.5191 113.299 81.2076 111.595 79.5018C109.891 77.7961 107.581 76.8352 105.17 76.83H61Z"
                fill="#A140FF"
            />
            <path
                d="M117.86 121.7V130.1C117.857 133.467 116.519 136.696 114.137 139.077C111.756 141.458 108.527 142.797 105.16 142.8H61C57.6308 142.8 54.3994 141.462 52.0161 139.081C49.6328 136.699 48.2927 133.469 48.29 130.1V116C55.37 114.48 66.14 114 79.21 119.22L87.3101 111.5L92.8301 125.5C92.8301 125.5 94.3101 120.35 99.0901 121.08C103.87 121.81 111.61 124.4 114.92 122.19C115.809 121.678 116.853 121.504 117.86 121.7Z"
                fill="#A140FF"
            />
            <path
                d="M102.39 94.95C105.102 94.95 107.3 92.7518 107.3 90.04C107.3 87.3283 105.102 85.13 102.39 85.13C99.6782 85.13 97.48 87.3283 97.48 90.04C97.48 92.7518 99.6782 94.95 102.39 94.95Z"
                fill="#A140FF"
            />
        </motion.svg>
    );
};
