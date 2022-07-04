import { Modal as MuiModal } from '@mui/material';

interface IProps {
    open: boolean;
    onClose: (event: {}) => void;
    children: React.ReactElement;
}

const Modal = (props: IProps) => {
    return (
        <MuiModal
            open={props.open}
            onClose={props.onClose}
            sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            {props.children}
        </MuiModal>
    );
};

export { Modal };
