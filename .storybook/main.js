import { mergeConfig } from 'vite';

export default {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-mdx-gfm',
        // 'storybook-addon-state'
    ],
    framework: { name: '@storybook/react-vite', options: {} },
   
    docs: {
        autodocs: true,
    },
};
