import React, { SVGProps } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface DWGProps {}

export const DWG = (props: SVGMotionProps<SVGSVGElement> & DWGProps) => {
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
                    d="M140 49.24C134.531 49.2373 129.287 47.0644 125.419 43.1982C121.551 39.3321 119.375 34.0889 119.37 28.62V0H27.2C23.6652 -2.4406e-07 20.1652 0.696337 16.8997 2.04932C13.6341 3.4023 10.6672 5.38537 8.16821 7.88525C5.66926 10.3851 3.68734 13.3529 2.33557 16.6189C0.983807 19.8849 0.288727 23.3853 0.290041 26.92V189.13C0.300639 196.26 3.14046 203.094 8.18591 208.132C13.2314 213.17 20.0699 216 27.2 216H137.8C141.335 216 144.835 215.304 148.1 213.951C151.366 212.598 154.333 210.615 156.832 208.115C159.331 205.615 161.313 202.647 162.665 199.381C164.016 196.115 164.711 192.615 164.71 189.08V49.2L140 49.24Z"
                    fill="#005FAD"
                />
            </g>
            <path
                d="M164.71 49.24H140C134.531 49.2373 129.287 47.0644 125.419 43.1982C121.551 39.3321 119.375 34.0889 119.37 28.62V0L164.71 49.24Z"
                fill="#005FAD"
            />
            <path
                d="M123.78 86.34H34.78C33.9234 86.34 33.1018 85.9997 32.4961 85.3939C31.8904 84.7882 31.55 83.9666 31.55 83.11C31.55 82.2533 31.8904 81.4318 32.4961 80.826C33.1018 80.2203 33.9234 79.88 34.78 79.88H123.78C124.204 79.88 124.623 79.9637 125.015 80.1261C125.406 80.2885 125.761 80.5266 126.06 80.8267C126.36 81.1267 126.597 81.4828 126.758 81.8746C126.919 82.2665 127.001 82.6863 127 83.11C127 83.9649 126.661 84.7849 126.057 85.3904C125.454 85.9958 124.635 86.3373 123.78 86.34Z"
                fill="#005FAD"
            />
            <path
                d="M184.23 170.6H59.1899C50.3202 170.6 43.13 177.79 43.13 186.66V223.94C43.13 232.81 50.3202 240 59.1899 240H184.23C193.1 240 200.29 232.81 200.29 223.94V186.66C200.29 177.79 193.1 170.6 184.23 170.6Z"
                fill="#005FAD"
            />
            <path d="M71 213.37V220.65H63.47V213.37H71Z" fill="white" />
            <path
                d="M100 213.39C98.7508 215.666 96.8587 217.523 94.5601 218.73C91.978 220.06 89.1034 220.72 86.2 220.65H74.8V190.58H86.16C89.0647 190.504 91.9431 191.147 94.54 192.45C96.8271 193.633 98.7128 195.467 99.96 197.72C101.253 200.124 101.904 202.821 101.85 205.55C101.915 208.279 101.278 210.978 100 213.39ZM92.17 211.88C92.9865 211.05 93.6194 210.057 94.0277 208.967C94.436 207.876 94.6105 206.712 94.54 205.55C94.6107 204.386 94.4362 203.221 94.028 202.128C93.6197 201.036 92.9868 200.042 92.17 199.21C90.3491 197.619 87.9737 196.81 85.5601 196.96H82.12V214.14H85.5601C87.9622 214.281 90.3229 213.469 92.13 211.88H92.17Z"
                fill="white"
            />
            <path
                d="M146.85 190.58L139.67 220.65H130.67L125.86 200.53L121.01 220.65H112.01L104.82 190.58H112.73L116.6 212.35L121.87 190.58H129.87L135.14 212.35L139.05 190.58H146.85Z"
                fill="white"
            />
            <path
                d="M174.07 193C176.494 194.818 178.124 197.501 178.62 200.49H170.93C170.427 199.417 169.612 198.521 168.59 197.92C167.445 197.24 166.132 196.893 164.8 196.92C163.765 196.877 162.732 197.063 161.776 197.464C160.821 197.865 159.965 198.471 159.27 199.24C157.807 200.991 157.064 203.232 157.19 205.51C157.19 208.37 157.92 210.567 159.38 212.1C160.201 212.896 161.179 213.512 162.252 213.908C163.325 214.304 164.469 214.472 165.61 214.4C167.242 214.43 168.839 213.928 170.16 212.97C171.507 211.962 172.478 210.533 172.92 208.91H163.74V203.68H179V210.87C178.413 212.658 177.49 214.318 176.28 215.76C174.964 217.31 173.331 218.558 171.49 219.42C169.404 220.383 167.127 220.862 164.83 220.82C162.04 220.894 159.28 220.228 156.83 218.89C154.589 217.63 152.764 215.742 151.58 213.46C150.303 210.99 149.667 208.24 149.73 205.46C149.675 202.697 150.311 199.965 151.58 197.51C152.76 195.231 154.577 193.344 156.81 192.08C159.223 190.751 161.946 190.085 164.7 190.15C168.054 190.025 171.354 191.028 174.07 193Z"
                fill="white"
            />
            <path
                d="M100.81 58.17V147.17C100.811 147.595 100.729 148.015 100.567 148.408C100.405 148.8 100.167 149.157 99.867 149.457C99.5668 149.757 99.2101 149.995 98.8176 150.157C98.4252 150.319 98.0045 150.401 97.58 150.4C97.1563 150.4 96.7368 150.316 96.3455 150.154C95.9542 149.991 95.5987 149.753 95.2996 149.453C95.0004 149.153 94.7634 148.797 94.6022 148.405C94.441 148.013 94.3587 147.594 94.36 147.17V58.17C94.36 57.3151 94.6989 56.495 95.3025 55.8895C95.9061 55.2841 96.7251 54.9426 97.58 54.9399C98.4366 54.9399 99.2583 55.2802 99.864 55.886C100.47 56.4917 100.81 57.3134 100.81 58.17Z"
                fill="#005FAD"
            />
            <path d="M108.1 72.36H87.49V92.97H108.1V72.36Z" fill="#005FAD" />
        </motion.svg>
    );
};
