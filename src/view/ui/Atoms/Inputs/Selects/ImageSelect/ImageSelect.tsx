import React from 'react';
import { MoreHoriz, Remove } from '@mui/icons-material';
import { Box, Stack } from '@mui/material';
import { Modal } from '../../../Utils';
import { Button, IconButton, UploadButton } from '../../Buttons';

export interface IImageSelect {
    name: string;
    imgs: string[];
    handleFiles: (name: string, files: (string | File)[]) => void;
}

export const ImageSelect = ({ name, imgs, handleFiles }: IImageSelect) => {
    const [openModal, setOpenModal] = React.useState(false);
    const [imagesState, setImagesState] = React.useState(imgs);
    const [imagesAdded, setImagesAdded] = React.useState<File[]>([]);
    const handleOpenModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
    };
    const removeImage = (e: React.MouseEvent<HTMLElement, MouseEvent>, i: number) => {
        const newImages = imagesState.filter((d, index) => index !== i);
        console.log(newImages.length);
        setImagesState(newImages);
    };
    const RemoveIcon = ({ i }: { i: number }) => (
        <IconButton
            sx={{
                position: 'absolute',
                right: '-10px',
                top: '-10px',
                zIndex: 1,
                background: 'white',
                border: '1px solid #ccc',
                padding: '2px',
                [':hover']: {
                    backgroundColor: '#eee',
                },
            }}
            handleClick={(e) => removeImage(e, i)}
        >
            <Remove color="error" fontSize="small" />
        </IconButton>
    );
    const handleAccept = (e: React.MouseEvent<Element, MouseEvent> | undefined) => {
        const allFiles = [...imagesState, ...imagesAdded];
        handleFiles(name, allFiles);
    };
    return (
        <>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box bgcolor="white" p="20px" borderRadius="4px" display="flex" flexDirection="column" gap={2} alignItems="center">
                    <Box display="flex" flexDirection="row" gap="5px">
                        {imagesState.map((d, i) => (
                            <Box position="relative" p="2px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                                <RemoveIcon i={i} />
                                <img src={d} alt={d} width="50px" height="50px" />
                            </Box>
                        ))}
                    </Box>
                    <Box display="flex" flexDirection="row" gap="5px">
                        <UploadButton multiple name="addFiles" handleFiles={(name, value) => setImagesAdded(value as File[])} />
                    </Box>
                    <Button text="Aceptar" type="button" variant="contained" handleClick={handleAccept} />
                </Box>
            </Modal>
            <Stack direction="row" gap="4px">
                {imagesState.slice(0, 5).map((d, i) => (
                    <Box position="relative" p="2px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                        <RemoveIcon i={i} />
                        <img src={d} alt={d} width="50px" height="50px" />
                    </Box>
                ))}
                {imgs.length > 5 && (
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <IconButton handleClick={handleOpenModal}>
                            <MoreHoriz />
                        </IconButton>
                    </Box>
                )}
            </Stack>
        </>
    );
};
