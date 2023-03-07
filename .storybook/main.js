module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-a11y'],
    framework: '@storybook/react-vite',
    // webpackFinal: async (config) => {
    //     config.module.rules.push({
    //         test: /\.mjs$/,
    //         include: /node_modules/,
    //         type: 'javascript/auto',
    //     });
    //     return config;
    // },
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config) {
        return {
            ...config,
            define: {
                ...config.define,
                global: 'window',
            },
        };
    },
};
