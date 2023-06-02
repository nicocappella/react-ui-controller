import React from 'react';

export type ModalReturn = { modal: boolean; openModal: () => void; closeModal: () => void };

export const useModal = (): ModalReturn => {
    const [modal, setModal] = React.useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };
    return {
        modal,
        openModal,
        closeModal,
    };
};
