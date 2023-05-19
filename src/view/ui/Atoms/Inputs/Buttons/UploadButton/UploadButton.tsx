import { Delete } from '@mui/icons-material';
import { Box, FormHelperText, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

export interface IUploadButton {
    limit?: number;
    multiple?: boolean;
    name: string;
    handleFiles: (name: string | undefined, value: File[] | File | undefined) => void;
    clearAll?: boolean;
    defaultImages?: File[];
    title?: string;
}

export const UploadButton = ({ limit = 100, multiple, name, handleFiles, clearAll, defaultImages = [], title }: IUploadButton) => {
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

            if (limit === 1 || !multiple) {
                const newFile = Object.values(target.files).map((file: File) => file)[0];
                setSingleFile(newFile);
                handleFiles(name, newFile);
                // ref.onchange!(newFile[0]);
            }

            if (multiple) {
                const newFiles = Object.values(target.files).map((file: File) => file);
                if (newFiles) {
                    const updatedList = [...fileList, ...newFiles];
                    if (updatedList.length > limit) {
                        return setError({ isError: true, text: `No puede haber más de ${limit} archivos.` });
                    }
                    setFileList(updatedList);
                    handleFiles(name, updatedList);
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
        handleFiles(name, updatedList);
    };

    // remove single image
    const fileSingleRemove = () => {
        if (error.isError) {
            setError({ isError: false, text: '' });
        }
        setSingleFile(undefined);
        handleFiles(name, []);
    };

    // TypeScript Type
    type CustomType = 'jpg' | 'png' | 'svg';

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
            <Box sx={{ backgroundColor: '#fff', borderRadius: '2rem', padding: '1rem' }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        position: 'relative',
                        width: 'fit-content',
                        height: '5rem',
                        border: '1px solid #c4c4c4',
                        borderRadius: '20px',
                    }}
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDragLeave}
                >
                    <Stack justifyContent="center" sx={{ p: 1, textAlign: 'center' }}>
                        <Typography sx={{ color: '#ccc' }}>{limit > 1 ? 'Explorar archivos para cargar' : 'Explorar archivo para cargar'}</Typography>
                        <div>{/* <img src={uploadImg} alt="file upload" style={{ width: '5rem' }} /> */}</div>
                        <Typography variant="body1" component="span">
                            <strong>Archivos soportados</strong>
                        </Typography>
                        <Typography variant="body2" component="span">
                            JPG, JPEG, PNG
                        </Typography>
                    </Stack>
                    <input
                        type="file"
                        name={name}
                        // onBlur={onBlur}
                        ref={inputRef}
                        onChange={onFileDrop}
                        multiple={multiple}
                        accept="image/jpg, image/png, image/jpeg"
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
            </Box>
            <FormHelperText sx={{ textAlign: 'center', my: 1 }} error={error.isError}>
                {error.text}
            </FormHelperText>

            {/* ?Image Preview ? */}
            <Box>
                {fileList.length > 0 && title && (
                    <Typography variant="body1" align="center" fontWeight="bold">
                        {title}
                    </Typography>
                )}
                {fileList.length > 0 || singleFile ? (
                    <Stack spacing={2} sx={{ my: 2 }}>
                        {multiple ? fileList.map((item, index) => fileCard(item, index)) : singleFile && fileCard(singleFile, 0)}
                    </Stack>
                ) : null}
            </Box>
        </>
    );
};
