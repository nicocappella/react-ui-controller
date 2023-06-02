import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../../Atoms';
import { Dialog } from './index';

export default {
    title: 'React-Ui-Controller/Molecules/Dialogs/Dialog',
    component: Dialog,
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = (args) => <Dialog {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {
    actions: [
        <Button variant="contained" type="button" key="accept" text="Aceptar" />,
        <Button variant="text" type="button" key="cancel" text="Cancelar" />,
    ],
    title: 'Example',
    handleClose() {},
};
