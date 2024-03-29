import { MoreHoriz, Remove } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Modal } from '../../../Utils';
import { Button, IconButton, UploadButton } from '../../Buttons';

export interface IImageSelect {
    name?: string;
    imgs?: (string | { id: string; url: string })[];
    handleFiles?: (name: string, files: (string | { id: string; url: string })[]) => void;
    id?: string | number;
    handleAddImages?: (name: string, files: File[], id?: string | number) => void;
}

export const ImageSelect = ({
    name = 'image-select',
    imgs = [{ id: '', url: '' }],
    handleFiles = () => {},
    id,
    handleAddImages = () => {},
}: IImageSelect) => {
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
        setImagesState(newImages);
        handleFiles(name, newImages);
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
    const handleAcceptAddImages = () => {
        handleAddImages(name, imagesAdded, id);
        handleCloseModal();
    };
    return (
        <>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box bgcolor="white" p="20px" borderRadius="4px" display="flex" flexDirection="column" gap={2} alignItems="center">
                    <Typography variant="h6">Eliminar Imágenes</Typography>
                    <Box display="flex" flexDirection="row" gap="5px">
                        {imagesState.map((d, i) => (
                            <Box
                                position="relative"
                                p="2px"
                                border="1px solid black"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                key={i}
                            >
                                <RemoveIcon i={i} />
                                {typeof d === 'string' ? (
                                    <img src={d} alt={d} key={i} width="50px" height="50px" />
                                ) : (
                                    <img src={d.url} alt="Edited image" key={d.id} width="50px" height="50px" />
                                )}
                            </Box>
                        ))}
                    </Box>
                    <Box display="flex" gap={2}>
                        <Button text="Aceptar" variant="contained" handleClick={() => {}} type="button" />
                        <Button text="Cancelar" type="button" variant="outlined" handleClick={handleCloseModal} color="error" />
                    </Box>
                    <Divider />
                    {/* <BasicForm direction="column" encType="multipart/form-data" handleSubmit={handleAcceptAddImages} alignItems="center"> */}
                    <Typography variant="h6">Agregar Imágenes</Typography>
                    <Box display="flex" flexDirection="row" gap="5px">
                        <UploadButton
                            multiple
                            limit={10}
                            name="addFiles"
                            handleChange={(name, value) => setImagesAdded(value)}
                            defaultImages={imagesAdded}
                            title="Archivos nuevos"
                        />
                    </Box>
                    <Box display="flex" gap={2}>
                        <Button text="Aceptar" variant="contained" type="button" handleClick={handleAcceptAddImages} />
                        <Button text="Cancelar" type="button" variant="outlined" handleClick={handleCloseModal} color="error" />
                    </Box>
                    {/* </BasicForm> */}
                </Box>
            </Modal>
            <Stack direction="row" gap="4px">
                {imagesState.slice(0, 5).map((d, i) => (
                    <Box position="relative" p="2px" border="1px solid black" display="flex" justifyContent="center" alignItems="center" key={i}>
                        <RemoveIcon i={i} />
                        {typeof d === 'string' ? (
                            <img src={d} alt={d} key={i} width="50px" height="50px" />
                        ) : (
                            <img src={d.url} alt="Edited image" key={d.id} width="50px" height="50px" />
                        )}
                    </Box>
                ))}
                {imagesState.length < 5 &&
                    imagesAdded.slice(0, 5 - imagesState.length).map((d, i) => (
                        <Box position="relative" p="2px" border="1px solid black" display="flex" justifyContent="center" alignItems="center">
                            <RemoveIcon i={i} />
                            <img src={URL.createObjectURL(d)} alt={`upload-${i}`} width="50px" height="50px" />
                        </Box>
                    ))}

                <Box display="flex" justifyContent="center" alignItems="center">
                    <IconButton handleClick={handleOpenModal} title="Editar imágenes">
                        <MoreHoriz />
                    </IconButton>
                </Box>
            </Stack>
        </>
    );
};
