import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from './index';
import { Button } from '../../Atoms';

export default {
    title: 'React-Ui-Controller/Molecules/Dialog',
    component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const DefaultCheck = Template.bind({});

DefaultCheck.args = {
    actions: [
        <Button variant="contained" type="button" key="accept" text="Aceptar" />,
        <Button variant="text" type="button" key="cancel" text="Cancelar"  />,
    ],
    title: 'Example',
    handleClose() {},
};
