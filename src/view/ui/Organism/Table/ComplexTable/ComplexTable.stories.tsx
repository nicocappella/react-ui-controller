import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { products } from '../products';

import { ComplexTable } from './ComplexTable';

const newProducts = products.map((d) => ({ ...d, images: '' }));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Organism/Table/ComplexTable',
    component: ComplexTable,
} as ComponentMeta<typeof ComplexTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ComplexTable> = (args) => <ComplexTable {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    rows: newProducts,
    excludeId: true,
    editable: true,
    title: 'ExampleTable',
    toolbar: true,
};
// export const UploadButton = Template.bind({});
// UploadButton.args = {
//     variant: 'outlined',
//     uploadButton: {
//         id: 'file',
//         multiple: true,
//         type: '*',
//     },
//     text: 'Subir Archivo',
// };

// export const Large = Template.bind({});
// Large.args = {};

// export const Small = Template.bind({});
// Small.args = {};
