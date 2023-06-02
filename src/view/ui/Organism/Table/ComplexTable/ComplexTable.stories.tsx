import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../../../Atoms';
import { products } from '../products';
import { ComplexTable } from './ComplexTable';

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
        title: { label: 'Título', type: 'string' },
        description: { label: 'Descripción', type: 'string' },
        price: { label: 'Precio', type: 'currency' },
        discountPercentage: { label: 'Porcentaje de descuento', type: 'number' },
        rating: { label: 'Clasificación', type: 'number' },
        stock: { label: 'Cantidad en stock', type: 'number' },
        category: { label: 'Categoría', type: 'string' },
        brand: { label: 'Marca', type: 'string' },
        thumbnail: { label: 'Miniatura', type: 'image' },
        date: { label: 'Día', type: 'string' },
        images: { label: 'Imágenes', type: 'images' },
    },
    mainButton: [<Button text="Agregar fila" variant="contained" type="button" key="main" />],
    rowsPerPage: 5,
    editableCellForms: [
        { formInput: 'switch', head: 'title' },
        { formInput: 'textfield', head: 'description' },
        { formInput: 'textfield', head: 'price' },
        { formInput: 'textfield', head: 'discountPercentage' },
        { formInput: 'textfield', head: 'rating' },
        { formInput: 'textfield', head: 'stock' },
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
        { formInput: 'images', head: 'images' },
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
