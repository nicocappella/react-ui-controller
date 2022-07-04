import { Slide, Dialog as MuiDialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
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

interface IProps {
    open: boolean;
    handleClose: () => void;
    ariaDescription: string;
    title: string;
    content?: string | React.ReactNode[] | React.ReactNode;
    actions: React.ReactNode[];
}

const Dialog = (props: IProps) => {
    return (
        <MuiDialog
            open={props.open}
            keepMounted
            TransitionComponent={Transition}
            onClose={props.handleClose}
            aria-describedby={props.ariaDescription}
        >
            <DialogTitle>{props.title}</DialogTitle>
            {props.content && <DialogContent>{props.content}</DialogContent>}
            <DialogActions sx={{ justifyContent: 'end' }}>{props.actions}</DialogActions>
        </MuiDialog>
    );
};

export { Dialog };
