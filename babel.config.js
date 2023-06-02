module.exports = {
    presets: [
        [
            '@babel/env',
            {
                shippedProposals: true,
                useBuiltIns: 'usage',
                corejs: '3',
                modules: false,
                targets: { chrome: '100' },
            },
        ],
        '@babel/react',
        '@babel/typescript',
    ],
};
