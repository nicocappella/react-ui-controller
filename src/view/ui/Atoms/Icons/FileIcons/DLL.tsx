import React, { SVGProps } from 'react';
import { motion, SVGMotionProps } from 'framer-motion';

interface DLLProps {}

export const DLL = (props: SVGMotionProps<SVGSVGElement> & DLLProps) => {
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
                    d="M140.53 49.25C135.06 49.2447 129.816 47.0695 125.948 43.2018C122.081 39.3341 119.905 34.0898 119.9 28.62V0H27.77C20.633 0 13.7883 2.83511 8.7417 7.88171C3.6951 12.9283 0.860107 19.7731 0.860107 26.91V189.13C0.860107 196.267 3.6951 203.112 8.7417 208.158C13.7883 213.205 20.633 216.04 27.77 216.04H138.37C145.507 216.04 152.352 213.205 157.398 208.158C162.445 203.112 165.28 196.267 165.28 189.13V49.25H140.53Z"
                    fill="#A140FF"
                />
            </g>
            <path
                d="M165.28 49.25H140.53C135.06 49.2447 129.816 47.0695 125.948 43.2018C122.081 39.3341 119.905 34.0898 119.9 28.62V0L165.28 49.25Z"
                fill="#A140FF"
            />
            <path
                d="M184.8 170.61H59.76C50.8903 170.61 43.7 177.8 43.7 186.67V223.95C43.7 232.82 50.8903 240.01 59.76 240.01H184.8C193.67 240.01 200.86 232.82 200.86 223.95V186.67C200.86 177.8 193.67 170.61 184.8 170.61Z"
                fill="#A140FF"
            />
            <path d="M90 213.38V220.65H82.47V213.38H90Z" fill="white" />
            <path
                d="M119 213.4C117.751 215.673 115.858 217.527 113.56 218.73C110.978 220.061 108.104 220.721 105.2 220.65H93.8V190.58H105.15C108.055 190.503 110.933 191.146 113.53 192.45C115.815 193.636 117.7 195.469 118.95 197.72C120.246 200.123 120.901 202.82 120.85 205.55C120.914 208.282 120.277 210.984 119 213.4ZM111.18 211.89C111.992 211.055 112.622 210.06 113.028 208.969C113.434 207.877 113.609 206.713 113.54 205.55C113.609 204.387 113.434 203.223 113.028 202.131C112.622 201.04 111.992 200.045 111.18 199.21C109.354 197.62 106.977 196.812 104.56 196.96H101.12V214.14H104.56C106.96 214.275 109.317 213.468 111.13 211.89H111.18Z"
                fill="white"
            />
            <path d="M132.24 215.08H141.94V220.65H124.94V190.58H132.21L132.24 215.08Z" fill="white" />
            <path d="M152.57 215.08H162.27V220.65H145.27V190.58H152.54L152.57 215.08Z" fill="white" />
            <path
                d="M69.24 159.4C68.0996 159.4 67.0059 158.947 66.1995 158.141C65.3931 157.334 64.9399 156.24 64.9399 155.1V148.49C64.9399 147.926 65.0514 147.367 65.2676 146.846C65.4838 146.325 65.8005 145.852 66.2 145.453C66.5994 145.055 67.0736 144.739 67.5952 144.524C68.1169 144.309 68.6758 144.199 69.24 144.2C70.3778 144.2 71.4689 144.652 72.2734 145.457C73.078 146.261 73.53 147.352 73.53 148.49V155.1C73.53 156.239 73.0784 157.331 72.2742 158.137C71.4699 158.943 70.3787 159.397 69.24 159.4Z"
                fill="#A140FF"
            />
            <path
                d="M69.24 106.1C68.6758 106.101 68.1169 105.991 67.5952 105.776C67.0736 105.561 66.5994 105.246 66.2 104.847C65.8005 104.449 65.4838 103.975 65.2676 103.454C65.0514 102.933 64.9399 102.374 64.9399 101.81V94.12C64.9399 92.9796 65.3931 91.8859 66.1995 91.0795C67.0059 90.2731 68.0996 89.8199 69.24 89.8199C70.3787 89.8226 71.4699 90.2769 72.2742 91.083C73.0784 91.8891 73.53 92.9813 73.53 94.12V101.81C73.53 102.948 73.078 104.039 72.2734 104.844C71.4689 105.648 70.3778 106.1 69.24 106.1Z"
                fill="#A140FF"
            />
            <path
                d="M84.49 155.32C83.7346 155.319 82.9926 155.12 82.3381 154.743C81.6836 154.366 81.1395 153.823 80.76 153.17L77.5601 147.61C76.9908 146.623 76.8363 145.451 77.1306 144.35C77.425 143.25 78.144 142.311 79.1299 141.74C80.1179 141.172 81.2914 141.019 82.3921 141.315C83.4928 141.611 84.4308 142.332 85 143.32L88.21 148.87C88.7784 149.858 88.9313 151.031 88.635 152.132C88.3387 153.233 87.6175 154.171 86.6299 154.74C85.9804 155.119 85.2421 155.319 84.49 155.32Z"
                fill="#A140FF"
            />
            <path
                d="M57.9399 109.32C57.1841 109.321 56.4414 109.123 55.7866 108.746C55.1317 108.368 54.5878 107.825 54.2099 107.17L50.28 100.35C49.997 99.8625 49.8132 99.3239 49.739 98.7651C49.6647 98.2063 49.7015 97.6383 49.8474 97.0938C49.9932 96.5493 50.2452 96.039 50.5888 95.5922C50.9325 95.1454 51.3612 94.7708 51.8501 94.49C52.3383 94.2068 52.8776 94.0228 53.4372 93.9484C53.9968 93.874 54.5655 93.9108 55.1108 94.0567C55.6561 94.2025 56.1672 94.4546 56.6149 94.7984C57.0627 95.1422 57.4382 95.5709 57.7199 96.0601L61.6499 102.88C61.9331 103.368 62.1172 103.908 62.1916 104.467C62.266 105.027 62.2291 105.596 62.0832 106.141C61.9374 106.686 61.6855 107.197 61.3418 107.645C60.998 108.093 60.5692 108.468 60.08 108.75C59.4292 109.125 58.6909 109.321 57.9399 109.32Z"
                fill="#A140FF"
            />
            <path
                d="M95.65 144.15C94.8949 144.148 94.1536 143.948 93.5001 143.57L87.9401 140.36C86.9548 139.791 86.236 138.854 85.9415 137.755C85.6471 136.656 85.8014 135.485 86.3702 134.5C86.9394 133.512 87.8774 132.791 88.9781 132.495C90.0789 132.199 91.2521 132.352 92.2401 132.92L97.8002 136.13C98.7861 136.701 99.5051 137.64 99.7994 138.74C100.094 139.841 99.9395 141.013 99.3702 142C98.9947 142.654 98.4527 143.198 97.7994 143.576C97.1461 143.953 96.4046 144.151 95.65 144.15Z"
                fill="#A140FF"
            />
            <path
                d="M49.6399 117.6C48.8882 117.597 48.1506 117.397 47.5 117.02L40.6799 113.09C39.694 112.519 38.975 111.58 38.6807 110.48C38.3863 109.379 38.5408 108.207 39.1101 107.22C39.6793 106.232 40.6173 105.511 41.718 105.215C42.8187 104.919 43.992 105.071 44.98 105.64L51.8001 109.58C52.786 110.151 53.505 111.09 53.7993 112.19C54.0937 113.291 53.9394 114.463 53.3701 115.45C52.9922 116.104 52.4483 116.648 51.7935 117.025C51.1386 117.403 50.3957 117.601 49.6399 117.6Z"
                fill="#A140FF"
            />
            <path
                d="M99.73 128.91H93.1101C91.9705 128.907 90.8781 128.453 90.0723 127.648C89.2664 126.842 88.8127 125.75 88.8101 124.61C88.8127 123.471 89.2669 122.38 90.073 121.576C90.8791 120.772 91.9714 120.32 93.1101 120.32H99.73C100.869 120.32 101.961 120.772 102.767 121.576C103.573 122.38 104.027 123.471 104.03 124.61C104.027 125.75 103.573 126.842 102.768 127.648C101.962 128.453 100.87 128.907 99.73 128.91Z"
                fill="#A140FF"
            />
            <path
                d="M46.4299 128.91H38.75C37.6104 128.907 36.5182 128.453 35.7124 127.648C34.9066 126.842 34.4526 125.75 34.45 124.61C34.4526 123.471 34.9068 122.38 35.7129 121.576C36.519 120.772 37.6113 120.32 38.75 120.32H46.4299C47.5677 120.32 48.6588 120.772 49.4634 121.577C50.2679 122.381 50.72 123.472 50.72 124.61C50.72 125.749 50.2684 126.841 49.4641 127.647C48.6599 128.453 47.5686 128.907 46.4299 128.91Z"
                fill="#A140FF"
            />
            <path
                d="M89.6201 117.14C88.8643 117.141 88.1214 116.943 87.4666 116.565C86.8117 116.188 86.2678 115.645 85.8899 114.99C85.6087 114.501 85.4266 113.962 85.3538 113.404C85.281 112.845 85.3191 112.277 85.4658 111.732C85.6126 111.188 85.8651 110.678 86.209 110.232C86.5529 109.785 86.9813 109.411 87.47 109.13L93.47 105.64C94.458 105.071 95.6315 104.919 96.7322 105.215C97.8329 105.511 98.7709 106.232 99.3401 107.22C99.9094 108.207 100.064 109.379 99.7693 110.48C99.475 111.58 98.756 112.519 97.77 113.09L91.77 116.57C91.1169 116.948 90.3748 117.145 89.6201 117.14Z"
                fill="#A140FF"
            />
            <path
                d="M42.8301 144.15C42.0759 144.149 41.3351 143.95 40.6821 143.573C40.0292 143.196 39.4872 142.653 39.1101 142C38.5408 141.013 38.3863 139.841 38.6807 138.74C38.975 137.64 39.694 136.701 40.6799 136.13L47.04 132.46C48.0275 131.893 49.199 131.741 50.2988 132.035C51.3986 132.329 52.3372 133.046 52.9099 134.03C53.4792 135.017 53.6337 136.189 53.3394 137.29C53.045 138.39 52.326 139.329 51.3401 139.9L44.98 143.57C44.3265 143.948 43.5852 144.148 42.8301 144.15Z"
                fill="#A140FF"
            />
            <path
                d="M69.77 152.79H69.0801C64.1653 152.684 59.3701 151.253 55.2 148.65C51.0776 146.094 47.6983 142.501 45.3999 138.23C43.2516 134.208 42.1254 129.72 42.1201 125.16C42.1201 124.92 42.1201 124.7 42.1201 124.47C42.2384 119.771 43.553 115.18 45.9399 111.13C48.3238 107.086 51.696 103.714 55.74 101.33C59.8064 98.9412 64.4151 97.6299 69.1299 97.52H69.76C74.3255 97.5144 78.8206 98.645 82.8401 100.81C87.1079 103.101 90.6979 106.473 93.25 110.59C95.859 114.78 97.2892 119.596 97.3899 124.53C97.3899 124.7 97.3899 124.92 97.3899 125.16C97.3909 129.934 96.1541 134.627 93.8 138.78C91.3391 143.139 87.7366 146.745 83.3799 149.21C79.2284 151.558 74.5397 152.792 69.77 152.79ZM69.6599 106.1H69.3899C66.1267 106.166 62.9352 107.068 60.1201 108.72C57.3279 110.364 54.9985 112.69 53.3501 115.48C51.7009 118.282 50.7954 121.459 50.72 124.71C50.72 124.89 50.72 125.02 50.72 125.15C50.721 128.289 51.4937 131.38 52.97 134.15C54.5563 137.102 56.891 139.585 59.74 141.35C62.6247 143.14 65.9362 144.124 69.3301 144.2H69.77C73.0611 144.204 76.2967 143.353 79.1599 141.73C82.1666 140.028 84.6526 137.539 86.3501 134.53C87.9711 131.67 88.8221 128.438 88.8201 125.15V124.77C88.7461 121.354 87.7622 118.019 85.97 115.11C84.203 112.271 81.7243 109.944 78.78 108.36C75.972 106.868 72.8395 106.092 69.6599 106.1Z"
                fill="#A140FF"
            />
            <path
                d="M80.8001 108.87C80.049 108.872 79.3107 108.675 78.6599 108.3C78.1708 108.018 77.742 107.643 77.3982 107.195C77.0544 106.747 76.8026 106.236 76.6567 105.691C76.5109 105.146 76.474 104.577 76.5483 104.017C76.6227 103.458 76.8069 102.918 77.0901 102.43L80.76 96.0601C81.0417 95.5709 81.4173 95.1422 81.865 94.7984C82.3127 94.4546 82.8238 94.2025 83.3691 94.0567C83.9145 93.9108 84.4832 93.874 85.0427 93.9484C85.6023 94.0228 86.1416 94.2068 86.6299 94.49C87.1186 94.7709 87.5472 95.1454 87.8911 95.592C88.235 96.0385 88.4876 96.5485 88.6343 97.0927C88.781 97.6369 88.8191 98.2047 88.7463 98.7636C88.6735 99.3225 88.4912 99.8616 88.21 100.35L84.53 106.72C84.1521 107.375 83.6082 107.918 82.9534 108.295C82.2985 108.673 81.5559 108.871 80.8001 108.87Z"
                fill="#A140FF"
            />
            <path
                d="M54 155.32C53.2479 155.319 52.5096 155.119 51.8601 154.74C51.3709 154.458 50.9422 154.083 50.5984 153.635C50.2546 153.187 50.0025 152.676 49.8567 152.131C49.7108 151.586 49.6739 151.017 49.7483 150.457C49.8227 149.898 50.0068 149.358 50.29 148.87L53.76 142.87C54.0417 142.381 54.4173 141.952 54.865 141.608C55.3127 141.265 55.8238 141.012 56.3691 140.867C56.9145 140.721 57.4832 140.684 58.0427 140.758C58.6023 140.833 59.1416 141.017 59.6299 141.3C60.6158 141.871 61.335 142.81 61.6294 143.91C61.9238 145.011 61.7693 146.183 61.2 147.17L57.73 153.17C57.3521 153.825 56.8084 154.368 56.1536 154.746C55.4987 155.123 54.7558 155.321 54 155.32Z"
                fill="#A140FF"
            />
            <path
                d="M108.84 100.66C108.145 100.66 107.479 100.384 106.987 99.8926C106.496 99.4013 106.22 98.7349 106.22 98.0401V94.0401C106.22 93.6965 106.288 93.3563 106.42 93.039C106.551 92.7216 106.745 92.4334 106.988 92.1909C107.231 91.9484 107.52 91.7564 107.838 91.6259C108.156 91.4953 108.496 91.4288 108.84 91.4301C109.532 91.4301 110.196 91.705 110.686 92.1945C111.175 92.6839 111.45 93.3478 111.45 94.0401V98.0401C111.451 98.3836 111.385 98.7241 111.254 99.0419C111.124 99.3597 110.932 99.6486 110.689 99.892C110.447 100.135 110.158 100.329 109.841 100.46C109.524 100.592 109.184 100.66 108.84 100.66Z"
                fill="#A140FF"
            />
            <path
                d="M108.84 68.23C108.496 68.2313 108.156 68.1648 107.838 68.0342C107.52 67.9036 107.231 67.7116 106.988 67.4691C106.745 67.2266 106.551 66.9384 106.42 66.6211C106.288 66.3038 106.22 65.9636 106.22 65.62V60.9399C106.22 60.2451 106.496 59.5787 106.987 59.0874C107.479 58.5961 108.145 58.3199 108.84 58.3199C109.184 58.3199 109.524 58.3879 109.841 58.5197C110.158 58.6514 110.447 58.8446 110.689 59.088C110.932 59.3314 111.124 59.6203 111.254 59.9381C111.385 60.2559 111.451 60.5964 111.45 60.9399V65.62C111.45 66.3122 111.175 66.9761 110.686 67.4656C110.196 67.955 109.532 68.23 108.84 68.23Z"
                fill="#A140FF"
            />
            <path
                d="M118.12 98.17C117.661 98.1712 117.209 98.0518 116.811 97.8236C116.413 97.5954 116.081 97.2666 115.85 96.87L113.9 93.49C113.558 92.8825 113.472 92.1643 113.659 91.493C113.847 90.8218 114.293 90.2525 114.9 89.91C115.2 89.7411 115.531 89.6328 115.872 89.5917C116.214 89.5505 116.561 89.5772 116.892 89.67C117.224 89.7629 117.534 89.9202 117.805 90.1329C118.075 90.3457 118.301 90.6098 118.47 90.91L120.47 94.29C120.639 94.5901 120.747 94.9203 120.788 95.2622C120.83 95.604 120.803 95.9507 120.71 96.2822C120.617 96.6138 120.46 96.9239 120.247 97.1946C120.034 97.4653 119.77 97.6914 119.47 97.86C119.057 98.0849 118.59 98.1922 118.12 98.17Z"
                fill="#A140FF"
            />
            <path
                d="M102 70.19C101.54 70.1892 101.088 70.0678 100.69 69.8379C100.292 69.6081 99.9608 69.2778 99.73 68.8801L97.3401 64.73C97.1711 64.43 97.0629 64.0996 97.0217 63.7577C96.9805 63.4159 97.0072 63.0693 97.1001 62.7377C97.193 62.4062 97.3502 62.0962 97.563 61.8255C97.7757 61.5548 98.0399 61.3287 98.3401 61.1601C98.6398 60.9898 98.9701 60.8806 99.3122 60.8387C99.6544 60.7968 100.002 60.8231 100.333 60.9161C100.665 61.009 100.975 61.1668 101.246 61.3803C101.517 61.5938 101.742 61.8589 101.91 62.1601L104.3 66.3101C104.469 66.6101 104.577 66.9404 104.618 67.2823C104.66 67.6241 104.633 67.9707 104.54 68.3023C104.447 68.6339 104.29 68.9439 104.077 69.2147C103.864 69.4854 103.6 69.7115 103.3 69.8801C102.9 70.0919 102.453 70.1985 102 70.19Z"
                fill="#A140FF"
            />
            <path
                d="M124.91 91.3801C124.45 91.3823 123.998 91.2615 123.6 91.0301L120.22 89.0301C119.92 88.8615 119.656 88.6353 119.443 88.3646C119.23 88.0938 119.073 87.7839 118.98 87.4523C118.887 87.1208 118.86 86.7742 118.902 86.4323C118.943 86.0905 119.051 85.76 119.22 85.46C119.388 85.1588 119.613 84.8939 119.884 84.6803C120.154 84.4668 120.465 84.309 120.797 84.216C121.129 84.123 121.475 84.0967 121.818 84.1386C122.16 84.1805 122.49 84.2897 122.79 84.46L126.17 86.46C126.471 86.6276 126.736 86.8534 126.95 87.124C127.163 87.3946 127.321 87.7048 127.414 88.0367C127.507 88.3686 127.533 88.7156 127.491 89.0578C127.45 89.3999 127.34 89.7304 127.17 90.0301C126.947 90.4359 126.621 90.7749 126.223 91.0123C125.826 91.2496 125.373 91.3765 124.91 91.3801Z"
                fill="#A140FF"
            />
            <path
                d="M96.9199 75.22C96.4598 75.2222 96.0077 75.1014 95.6101 74.87L91.46 72.48C91.1597 72.3114 90.8956 72.0853 90.6829 71.8146C90.4701 71.5439 90.3128 71.2338 90.22 70.9023C90.1271 70.5707 90.1004 70.2241 90.1416 69.8822C90.1828 69.5404 90.291 69.2101 90.46 68.9101C90.8024 68.303 91.3717 67.8567 92.043 67.6692C92.7142 67.4817 93.4326 67.5684 94.04 67.9101L98.1799 70.3001C98.7869 70.6425 99.2334 71.2118 99.4209 71.8831C99.6084 72.5543 99.5216 73.2726 99.1799 73.88C98.9553 74.2833 98.628 74.6197 98.2309 74.8551C97.8339 75.0905 97.3815 75.2164 96.9199 75.22Z"
                fill="#A140FF"
            />
            <path
                d="M127.39 82.11H123.39C123.046 82.11 122.706 82.0422 122.389 81.9104C122.072 81.7786 121.784 81.5855 121.541 81.3421C121.299 81.0986 121.106 80.8097 120.976 80.4918C120.845 80.174 120.779 79.8336 120.78 79.49C120.78 78.7978 121.055 78.1339 121.544 77.6444C122.034 77.155 122.698 76.88 123.39 76.88H127.39C127.734 76.8787 128.074 76.9452 128.392 77.0758C128.71 77.2064 128.999 77.3984 129.242 77.6409C129.485 77.8834 129.679 78.1716 129.81 78.4889C129.942 78.8062 130.01 79.1464 130.01 79.49C130.01 80.1849 129.734 80.8513 129.243 81.3427C128.751 81.834 128.085 82.11 127.39 82.11Z"
                fill="#A140FF"
            />
            <path
                d="M95 82.11H90.3201C89.9765 82.11 89.6362 82.0422 89.3189 81.9104C89.0016 81.7786 88.7135 81.5855 88.471 81.342C88.2285 81.0986 88.0364 80.8096 87.9058 80.4918C87.7752 80.174 87.7087 79.8336 87.71 79.49C87.71 79.1472 87.7775 78.8079 87.9087 78.4912C88.0399 78.1746 88.232 77.8868 88.4744 77.6444C88.7167 77.402 89.0046 77.2099 89.3213 77.0787C89.638 76.9476 89.9773 76.88 90.3201 76.88H95C95.6922 76.88 96.356 77.1549 96.8455 77.6444C97.3349 78.1339 97.6101 78.7978 97.6101 79.49C97.6114 79.8336 97.5449 80.174 97.4143 80.4918C97.2838 80.8096 97.0916 81.0986 96.8491 81.342C96.6066 81.5855 96.3186 81.7786 96.0012 81.9104C95.6839 82.0422 95.3436 82.11 95 82.11Z"
                fill="#A140FF"
            />
            <path
                d="M121.24 75C120.78 74.9992 120.328 74.8778 119.93 74.648C119.532 74.4181 119.201 74.0877 118.97 73.69C118.801 73.3899 118.693 73.0596 118.652 72.7178C118.61 72.3759 118.637 72.0293 118.73 71.6978C118.823 71.3662 118.98 71.0561 119.193 70.7854C119.406 70.5147 119.67 70.2886 119.97 70.12L123.64 68C123.94 67.8311 124.27 67.723 124.612 67.6818C124.954 67.6406 125.301 67.6672 125.632 67.76C125.964 67.8529 126.274 68.0103 126.545 68.223C126.815 68.4358 127.041 68.6998 127.21 69C127.38 69.2997 127.49 69.6302 127.531 69.9723C127.573 70.3144 127.547 70.6615 127.454 70.9934C127.361 71.3253 127.203 71.6355 126.99 71.9061C126.776 72.1767 126.511 72.4023 126.21 72.57L122.54 74.69C122.14 74.9018 121.693 75.0086 121.24 75Z"
                fill="#A140FF"
            />
            <path
                d="M92.77 91.3801C92.3112 91.3805 91.8605 91.2595 91.4636 91.0295C91.0667 90.7994 90.7376 90.4683 90.51 90.07C90.3363 89.7736 90.2232 89.4459 90.177 89.1055C90.1308 88.7651 90.1524 88.4189 90.2407 88.087C90.329 87.755 90.4824 87.4439 90.6916 87.1716C90.9009 86.8992 91.162 86.6709 91.4599 86.5001L95.3301 84.2701C95.6298 84.0998 95.9601 83.9905 96.3022 83.9487C96.6444 83.9068 96.9916 83.9331 97.3235 84.0261C97.6554 84.119 97.9655 84.2768 98.2361 84.4903C98.5067 84.7038 98.7323 84.9689 98.8999 85.2701C99.0688 85.5701 99.1771 85.9005 99.2182 86.2424C99.2594 86.5842 99.2328 86.9308 99.1399 87.2624C99.047 87.5939 98.8898 87.9039 98.677 88.1746C98.4642 88.4453 98.2001 88.6714 97.8999 88.84L94.04 91.08C93.6486 91.2851 93.2118 91.3883 92.77 91.3801Z"
                fill="#A140FF"
            />
            <path
                d="M109.16 96.64H108.73C105.744 96.575 102.832 95.7043 100.3 94.12C97.7773 92.5711 95.7077 90.3842 94.3001 87.78C92.9846 85.3188 92.2976 82.5707 92.3001 79.78V79.3499C92.3728 76.4922 93.1747 73.7005 94.6299 71.24C96.0853 68.7609 98.1508 66.6954 100.63 65.24C103.105 63.787 105.91 62.9887 108.78 62.92H109.16C111.951 62.9113 114.701 63.5987 117.16 64.92C119.764 66.328 121.951 68.3975 123.5 70.92C125.08 73.4718 125.95 76.3993 126.02 79.4V79.79C126.022 82.6921 125.271 85.545 123.84 88.0699C122.34 90.7248 120.145 92.9204 117.49 94.42C114.954 95.8728 112.083 96.638 109.16 96.64ZM109.09 68.2299H108.94C106.951 68.2632 105.005 68.811 103.29 69.8199C101.589 70.8211 100.171 72.239 99.1699 73.9399C98.1678 75.6432 97.6172 77.5743 97.5701 79.55V79.8199C97.569 81.7315 98.0395 83.6138 98.9399 85.3C99.9054 87.0902 101.322 88.5967 103.05 89.67C104.807 90.7596 106.823 91.3603 108.89 91.41H109.16C111.161 91.4113 113.128 90.8945 114.87 89.91C116.7 88.8744 118.214 87.3603 119.25 85.53C120.232 83.787 120.749 81.8205 120.75 79.8199V79.5799C120.705 77.5043 120.108 75.4783 119.02 73.7099C117.943 71.9815 116.433 70.5647 114.64 69.5999C112.932 68.691 111.025 68.2203 109.09 68.2299Z"
                fill="#A140FF"
            />
            <path
                d="M115.87 69.9101C115.413 69.911 114.965 69.7902 114.57 69.5601C114.27 69.3915 114.006 69.1653 113.793 68.8945C113.58 68.6238 113.423 68.3139 113.33 67.9823C113.237 67.6508 113.211 67.3041 113.252 66.9623C113.293 66.6204 113.401 66.29 113.57 65.99L115.81 62.12C115.979 61.8198 116.205 61.5558 116.475 61.343C116.746 61.1303 117.056 60.9729 117.388 60.88C117.719 60.7871 118.066 60.7606 118.408 60.8018C118.75 60.843 119.08 60.9511 119.38 61.12C119.68 61.2886 119.944 61.5147 120.157 61.7854C120.37 62.0561 120.527 62.3662 120.62 62.6978C120.713 63.0293 120.739 63.3759 120.698 63.7178C120.657 64.0596 120.549 64.3899 120.38 64.69L118.14 68.57C117.915 68.9754 117.587 69.3134 117.187 69.549C116.788 69.7846 116.334 69.9093 115.87 69.9101Z"
                fill="#A140FF"
            />
            <path
                d="M99.56 98.1701C99.1033 98.171 98.6545 98.0501 98.26 97.82C97.9598 97.6514 97.6957 97.4253 97.4829 97.1546C97.2701 96.8838 97.1129 96.5739 97.02 96.2423C96.9271 95.9108 96.9005 95.5642 96.9416 95.2223C96.9828 94.8805 97.091 94.55 97.26 94.25L99.3701 90.59C99.5387 90.2898 99.7647 90.0258 100.035 89.813C100.306 89.6002 100.616 89.4429 100.948 89.35C101.279 89.2571 101.626 89.2306 101.968 89.2717C102.31 89.3129 102.64 89.421 102.94 89.59C103.24 89.7586 103.504 89.9848 103.717 90.2555C103.93 90.5262 104.087 90.8362 104.18 91.1677C104.273 91.4993 104.299 91.8459 104.258 92.1878C104.217 92.5296 104.109 92.86 103.94 93.1601L101.83 96.83C101.602 97.2326 101.273 97.5684 100.874 97.8036C100.476 98.0388 100.023 98.1652 99.56 98.1701Z"
                fill="#A140FF"
            />
        </motion.svg>
    );
};