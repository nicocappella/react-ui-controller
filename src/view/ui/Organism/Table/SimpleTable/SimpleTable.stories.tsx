import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { products } from '../products';

import { SimpleTable } from './SimpleTable';

const newProducts = products.map((d) => ({ ...d, images: '' }));
const headCells = Object.keys(products[0]).map((d) => ({ id: d, numeric: false, disablePadding: false, label: d }));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Organism/Table/SimpleTable',
    component: SimpleTable,
} as ComponentMeta<typeof SimpleTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleTable> = (args) => <SimpleTable {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    headCells: headCells,
    rows: newProducts,
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
