import { Autorenew, Delete, DeleteOutline } from '@mui/icons-material';
import { Box, FormHelperText, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Button } from '../Button';

export interface IUploadButton {
    name: string;
    clearAll?: boolean;
    type?: string;
    defaultImages?: File[];
    title?: string;
}
type FileProps =
    | { handleChange: (name: string | undefined, value: File | undefined) => void; multiple?: false; limit: never }
    | { handleChange: (name: string | undefined, value: File[] | undefined) => void; multiple: true; limit?: number };

export const UploadButton = ({
    multiple,
    limit,
    name,
    handleChange,
    clearAll,
    defaultImages = [],
    title,
    type = 'image/jpg, image/png, image/jpeg, image/webp',
}: IUploadButton & FileProps) => {
    const [singleFile, setSingleFile] = React.useState<File>();
    const [error, setError] = React.useState({ isError: false, text: '' });
    const [fileList, setFileList] = React.useState<File[]>(defaultImages);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Toggle the dragover class
    const onDragEnter = () => wrapperRef.current?.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current?.classList.remove('dragover');

    const onFileDrop = React.useCallback(
        (e: React.SyntheticEvent<EventTarget>) => {
            if (error.isError) {
                setError({ isError: false, text: '' });
            }
            const target = e.target as HTMLInputElement;
            // const ref = inputRef.current as HTMLInputElement;
            if (!target.files) return;

            if (!multiple) {
                const newFile = Object.values(target.files).map((file: File) => file)[0];
                setSingleFile(newFile);
                handleChange(name, newFile);
                // ref.onchange!(newFile[0]);
            }

            if (multiple && limit) {
                const newFiles = Object.values(target.files).map((file: File) => file);
                if (newFiles) {
                    const updatedList = [...fileList, ...newFiles];
                    if (updatedList.length > limit) {
                        return setError({ isError: true, text: `No puede haber más de ${limit} archivos.` });
                    }
                    setFileList(updatedList);
                    handleChange(name, updatedList);
                    // ref.onchange!(updatedList);
                }
            }
        },
        [fileList, limit, multiple, singleFile, inputRef],
    );
    // remove multiple images
    const fileRemove = (file: File) => {
        if (error.isError) {
            setError({ isError: false, text: '' });
        }
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        handleChange(name, updatedList);
    };

    // remove single image
    const fileSingleRemove = () => {
        if (error.isError) {
            setError({ isError: false, text: '' });
        }
        setSingleFile(undefined);
        handleChange(name, undefined);
    };

    // Calculate Size in KiloByte and MegaByte
    const calcSize = (size: number) => {
        return size < 1000000 ? `${Math.floor(size / 1000)} KB` : `${Math.floor(size / 1000000)} MB`;
    };
    const fileCard = (item: File, index?: number) => {
        return (
            <Box
                key={`image-${index}`}
                sx={{
                    position: 'relative',
                    backgroundColor: '#f5f8ff',
                    borderRadius: 1.5,
                    p: 0.5,
                }}
            >
                <Box display="flex">
                    <img
                        src={URL.createObjectURL(item)}
                        alt={`upload-${index}`}
                        style={{
                            height: '35px',
                            width: '35px',
                            objectFit: 'cover',
                        }}
                    />
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="body2">{item.name}</Typography>
                        <Typography variant="caption">{calcSize(item.size)}</Typography>
                    </Box>
                    <IconButton
                        onClick={() => {
                            if (multiple) {
                                fileRemove(item);
                            } else {
                                fileSingleRemove();
                            }
                        }}
                    >
                        <Delete />
                    </IconButton>
                </Box>
            </Box>
        );
    };
    React.useEffect(() => {
        if (clearAll) {
            setFileList([]);
            setSingleFile(undefined);
        }
    }, [clearAll]);

    return (
        <>
            <Box
                sx={{ backgroundColor: '#fff', borderRadius: '2rem', padding: '1rem' }}
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                        position: 'relative',
                        minWidth: '150px',
                        width: 'fit-content',
                        minHeight: '150px',
                        height: '5rem',
                        border: singleFile ? 'none ' : '1px solid #c4c4c4',
                        borderRadius: '20px',
                    }}
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDragLeave}
                >
                    {singleFile && type.includes('image') ? (
                        <Box position="relative">
                            <img
                                src={URL.createObjectURL(singleFile)}
                                alt="Imagen única"
                                width="150px"
                                height="150px"
                                style={{ objectFit: 'contain', borderRadius: '20px' }}
                            />
                            <Box sx={{ position: 'absolute', bottom: 0, left: '20px' }}>
                                <Button
                                    size="small"
                                    variant="contained"
                                    text="Cambiar"
                                    handleClick={fileSingleRemove}
                                    padding="16px"
                                    color="info"
                                    startIcon={<Autorenew color="white" />}
                                />
                            </Box>
                        </Box>
                    ) : singleFile && !type.includes('image') ? (
                        <Box></Box>
                    ) : (
                        <Stack justifyContent="center" sx={{ p: 1, textAlign: 'center' }}>
                            <Typography sx={{ color: '#ccc' }}>
                                {limit && limit > 1 ? 'Explorar archivos para cargar' : 'Explorar archivo para cargar'}
                            </Typography>
                            <div>{/* <img src={uploadImg} alt="file upload" style={{ width: '5rem' }} /> */}</div>
                            <Typography variant="body1" component="span">
                                <strong>Archivos soportados</strong>
                            </Typography>
                            <Typography variant="body2" component="span">
                                {type}
                            </Typography>
                        </Stack>
                    )}

                    <input
                        type="file"
                        name={name}
                        // onBlur={onBlur}
                        ref={inputRef}
                        onChange={onFileDrop}
                        multiple={multiple}
                        accept={type}
                        style={{
                            opacity: 0,
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer',
                        }}
                    />
                </Box>
                {singleFile && (
                    <Button
                        size="small"
                        variant="contained"
                        text="Quitar"
                        handleClick={fileSingleRemove}
                        color="error"
                        startIcon={<DeleteOutline />}
                    />
                )}
            </Box>
            {error.isError && (
                <FormHelperText sx={{ textAlign: 'center', my: 1 }} error={error.isError}>
                    {error.text}
                </FormHelperText>
            )}

            {/* ?Image Preview ? */}
            {fileList.length > 0 && (
                <Box>
                    {fileList.length > 0 && title && (
                        <Typography variant="body1" align="center" fontWeight="bold">
                            {title}
                        </Typography>
                    )}
                    {fileList.length > 0 || singleFile ? (
                        <Stack spacing={2} sx={{ my: 2 }}>
                            {multiple && fileList.map((item, index) => fileCard(item, index))}
                        </Stack>
                    ) : null}
                </Box>
            )}
        </>
    );
};
