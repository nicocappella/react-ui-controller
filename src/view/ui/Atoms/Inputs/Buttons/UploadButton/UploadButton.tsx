import { Autorenew, Delete, DeleteOutline } from '@mui/icons-material';
import { Box, FormHelperText, Stack, Typography } from '@mui/material';
import React from 'react';
import { IconButton } from '../IconButton';
import { compressAsync } from '../../../../../../utils/Compressor';
import { motion } from 'framer-motion';
import { extensionIcons } from '../../../Icons/FileIcons/extensionIcons';

export interface IUploadButton {
    name: string;
    clearAll?: boolean;
    type?: string;
    title?: string;
}
export type FileProps =
    | {
          handleChange: (name: string | undefined, value: File | Blob | undefined) => void;
          multiple?: never;
          limit?: never;
          defaultImages?: never;
          defaultImage?: File | string;
      }
    | {
          handleChange: (name: string | undefined, value: File[] | Blob[] | undefined) => void;
          multiple: true;
          limit?: number;
          defaultImages?: File[];
          defaultImage?: never;
      };

export const UploadButton = ({
    multiple,
    limit = 1,
    name,
    handleChange,
    clearAll,
    defaultImages = [],
    defaultImage,
    title,
    type = 'image/jpg, image/png, image/jpeg, image/webp',
}: IUploadButton & FileProps) => {
    const [singleFile, setSingleFile] = React.useState<File | Blob | string | undefined>(defaultImage);
    const [error, setError] = React.useState({ isError: false, text: '' });
    const [fileList, setFileList] = React.useState<Array<Blob | File>>(defaultImages);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // Toggle the dragover class
    const onDragEnter = () => wrapperRef.current?.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current?.classList.remove('dragover');

    const onFileDrop = React.useCallback(
        async (e: React.SyntheticEvent<EventTarget>) => {
            if (error.isError) {
                setError({ isError: false, text: '' });
            }
            const target = e.target as HTMLInputElement;
            // const ref = inputRef.current as HTMLInputElement;
            if (!target.files) return;

            if (!multiple) {
                const newFile = Object.values(target.files).map((file: File) => file)[0];
                if (type.includes('image')) {
                    const compressedFile = await compressAsync(newFile, { quality: 0.8, maxHeight: 1000, maxWidth: 1000 });
                    setSingleFile(compressedFile);
                    handleChange(name, compressedFile);
                } else {
                    setSingleFile(newFile);
                    handleChange(name, newFile);
                }
            }

            if (multiple) {
                const newFiles = Object.values(target.files);
                if (newFiles) {
                    if (fileList.length + Object.values(target.files).length > limit) {
                        return setError({ isError: true, text: `No puede haber más de ${limit} archivos.` });
                    }
                    if (type.includes('image')) {
                        const files = await Promise.all(
                            newFiles.map(async (file: File, i) => {
                                const compressedFile = await compressAsync(file, { quality: 0.8, maxHeight: 1000, maxWidth: 1000 });
                                return compressedFile;
                            }),
                        );
                        setFileList((prevState) => [...prevState, ...files]);
                        handleChange(name, [...fileList, ...files]);
                    } else {
                        const updatedList = [...fileList, ...newFiles];
                        setFileList(updatedList);
                        handleChange(name, updatedList);
                    }
                }
            }
        },

        [fileList, limit, multiple, singleFile, inputRef],
    );
    // remove multiple images
    const fileRemove = (file: File | Blob) => {
        console.log(file);
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
    const fileCard = (item: File | Blob, index?: number) => {
        return (
            <Box
                key={`image-${index}`}
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index ? index / 2 : 0.2 }}
                sx={{
                    position: 'relative',
                    backgroundColor: '#f5f8ff',
                    borderRadius: 1.5,
                    p: 0.5,
                }}
            >
                <Box display="flex" justifyContent="space-between">
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
                            <Typography variant="caption" color="GrayText">
                                {calcSize(item.size)}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton
                        handleClick={() => {
                            fileRemove(item);
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
    }, [clearAll, fileList]);
    return (
        <>
            <Box sx={{ backgroundColor: '#fff', borderRadius: '2rem', padding: '1rem' }} display="flex" flexDirection="column" alignItems="center">
                <Box
                    display="flex"
                    justifyContent="center"
                    flexDirection="column"
                    alignItems="center"
                    sx={{
                        position: 'relative',
                        minWidth: '150px',
                        width: 'fit-content',
                        minHeight: '100px',
                        height: 'fit-content',
                        border: singleFile ? 'none ' : '1px solid #c4c4c4',
                        borderRadius: '20px',
                    }}
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDragLeave}
                >
                    {singleFile ? (
                        <>
                            <Box
                                position="relative"
                                display="flex"
                                flexDirection={type.includes('image') ? 'column' : 'row'}
                                gap={2}
                                alignItems="center"
                            >
                                {type.includes('image') ? (
                                    <img
                                        src={typeof singleFile === 'string' ? singleFile : URL.createObjectURL(singleFile)}
                                        alt="Imagen única"
                                        width="100px"
                                        height="100px"
                                        style={{ objectFit: 'contain', borderRadius: '20px' }}
                                    />
                                ) : (
                                    <Box>{extensionIcons[singleFile instanceof File ? singleFile.name.split('.')[1] : '']}</Box>
                                )}
                                <Box>
                                    <Typography variant="body2">{singleFile instanceof File && singleFile.name}</Typography>
                                    <Typography variant="body2" color="GrayText">
                                        {singleFile instanceof Blob && calcSize(singleFile.size)}
                                    </Typography>
                                </Box>
                            </Box>
                        </>
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
                    <Box display="flex" gap={4}>
                        <IconButton size="small" handleClick={() => inputRef.current?.click()} color="info" background="lighten">
                            <Autorenew color="primary" />
                        </IconButton>
                        <IconButton size="small" handleClick={fileSingleRemove} background="lighten">
                            <DeleteOutline color="error" />
                        </IconButton>
                    </Box>
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
                    {fileList.length > 0 ? (
                        <Stack spacing={2} sx={{ my: 2 }}>
                            {multiple && fileList.map((item, index) => fileCard(item, index))}
                        </Stack>
                    ) : null}
                </Box>
            )}
        </>
    );
};
