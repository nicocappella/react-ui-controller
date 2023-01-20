import { Modal as MuiModal, ModalProps } from '@mui/material';

interface IModal {
    open: boolean;
    onClose: (event: {}) => void;
    children: React.ReactElement;
}

const Modal = ({ open, onClose, children }: IModal & ModalProps) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
            sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            {children}
        </MuiModal>
    );
};

export { Modal };
