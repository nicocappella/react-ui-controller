import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { products } from '../products';

import { ComplexTable } from './ComplexTable';
import { Button } from '../../../Atoms';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'React-Ui-Controller/Organism/Table/ComplexTable',
    component: ComplexTable,
} as Meta<typeof ComplexTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ComplexTable> = (args) => <ComplexTable {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    rows: products,
    excludeId: true,
    editable: true,
    title: 'ExampleTable',
    toolbar: true,
    headCellsLabelObject: {
        title: 'Título',
        description: 'Descripción',
        price: 'Precio',
        discountPercentage: 'Porcentaje de descuento',
        rating: 'Clasificación',
        stock: 'Cantidad en stock',
        category: 'Categoría',
        brand: 'Marca',
        thumbnail: 'Miniatura',
        date: 'Día',
        images: 'Imágenes',
    },
    mainButton: [<Button text="Agregar fila" variant="contained" type="button" key="main" />],
    rowsPerPage: 5,
    editableCellForms: [
        { formInput: 'textfield', head: 'title' },
        { formInput: 'textfield', head: 'description' },
        { formInput: 'textfield', head: 'price' },
        { formInput: 'textfield', head: 'discountPercentage' },
        { formInput: 'textfield', head: 'rating' },
        { formInput: 'textfield', head: 'stock' },
        {
            formInput: 'select',
            head: 'category',
            options: [
                { id: '1', text: '20' },
                { id: '2', text: '30' },
            ],
        },
        {
            formInput: 'select',
            head: 'brand',
            options: [
                { id: '1', text: '20' },
                { id: '2', text: '30' },
            ],
        },
        { formInput: 'none', head: 'thumbnail' },
        { formInput: 'datepicker', head: 'date' },
        { formInput: 'switch', head: 'images' },
    ],
    confirmEdit: (id, edited) => console.log(id, edited),
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
