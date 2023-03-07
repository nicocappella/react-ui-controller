import { Slide, Dialog as MuiDialog, DialogTitle, DialogContent, DialogActions, DialogProps } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import React from 'react';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export interface IDialog {
    open: boolean;
    handleClose: () => void;
    ariaDescription: string;
    title: string;
    content?: string | React.ReactNode[] | React.ReactNode;
    actions: React.ReactNode[];
}

const Dialog = ({ open, handleClose, ariaDescription, title, content, actions, ...props }: IDialog & DialogProps) => {
    return (
        <MuiDialog {...props} open={open} keepMounted TransitionComponent={Transition} onClose={handleClose} aria-describedby={ariaDescription}>
            <DialogTitle>{title}</DialogTitle>
            {content && <DialogContent>{content}</DialogContent>}
            <DialogActions sx={{ justifyContent: 'end' }}>{actions}</DialogActions>
        </MuiDialog>
    );
};

export { Dialog };
