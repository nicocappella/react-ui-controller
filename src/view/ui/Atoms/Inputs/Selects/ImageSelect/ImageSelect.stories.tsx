import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { ImageSelect } from './ImageSelect';

export default {
    title: 'React-Ui-Controller/Atoms/Inputs/Selects/Image Select',
    component: ImageSelect,
} as Meta<typeof ImageSelect>;

const Template: StoryFn<typeof ImageSelect> = (args) => <ImageSelect {...args} />;

export const NormalImagesSelect = Template.bind({});

NormalImagesSelect.args = {
    name: 'images-test',
    imgs: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    ],
    handleFiles: (name, files) => console.log({ [name]: files }),
};

export const SmallSelect = Template.bind({});
SmallSelect.args = {};

export const LargeSelect = Template.bind({});
LargeSelect.args = {};
