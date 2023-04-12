import { Delete } from '@mui/icons-material';
import { Box, FormHelperText, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

export interface IUploadButton {
    limit?: number;
    multiple?: boolean;
    name: string;
    handleFiles: (files: { [key: string]: File[] }) => void;
}

export const UploadButton = ({ limit = 100, multiple, name, handleFiles }: IUploadButton) => {
    const [singleFile, setSingleFile] = React.useState<File[]>([]);
    const [fileList, setFileList] = React.useState<File[]>([]);
    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    // ? Toggle the dragover class
    const onDragEnter = () => wrapperRef.current?.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current?.classList.remove('dragover');

    const onFileDrop = React.useCallback(
        (e: React.SyntheticEvent<EventTarget>) => {
            const target = e.target as HTMLInputElement;
            const ref = inputRef.current as HTMLInputElement;
            if (!target.files) return;

            if (limit === 1) {
                const newFile = Object.values(target.files).map((file: File) => file);
                if (singleFile.length >= 1) return alert('Only a single image allowed');
                setSingleFile(newFile);
                handleFiles({ [name]: newFile });
                ref.onchange!(newFile[0]);
            }

            if (multiple) {
                const newFiles = Object.values(target.files).map((file: File) => file);
                if (newFiles) {
                    const updatedList = [...fileList, ...newFiles];
                    if (updatedList.length > limit) {
                        return alert(`Image must not be more than ${limit}`);
                    }
                    setFileList(updatedList);
                    handleFiles({ name: updatedList });
                    ref.onchange!(updatedList);
                }
            }
        },
        [fileList, limit, multiple, singleFile, inputRef],
    );
    // ? remove multiple images
    const fileRemove = (file: File) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        handleFiles({ name: updatedList });
    };

    // ? remove single image
    const fileSingleRemove = () => {
        setSingleFile([]);
        handleFiles({ name: [] });
    };

    // ? TypeScript Type
    type CustomType = 'jpg' | 'png' | 'svg';

    // ? Calculate Size in KiloByte and MegaByte
    const calcSize = (size: number) => {
        return size < 1000000 ? `${Math.floor(size / 1000)} KB` : `${Math.floor(size / 1000000)} MB`;
    };
    // React.useEffect(() => {
    //     if (isSubmitting) {
    //         setFileList([]);
    //         setSingleFile([]);
    //     }
    // }, [isSubmitting]);

    return (
        <>
            <Box sx={{ backgroundColor: '#fff', borderRadius: '2rem', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', padding: '1rem' }}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '13rem',
                        border: '2px dashed #4267b2',
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
            {/* <FormHelperText sx={{ textAlign: 'center', my: 1 }} error={!!errors[name]}>
                {errors[name] ? errors[name].message : ''}
            </FormHelperText> */}

            {/* ?Image Preview ? */}
            {fileList.length > 0 || singleFile.length > 0 ? (
                <Stack spacing={2} sx={{ my: 2 }}>
                    {(multiple ? fileList : singleFile).map((item, index) => {
                        const imageType = item.type.split('/')[1] as CustomType;
                        return (
                            <Box
                                key={index}
                                sx={{
                                    position: 'relative',
                                    backgroundColor: '#f5f8ff',
                                    borderRadius: 1.5,
                                    p: 0.5,
                                }}
                            >
                                <Box display="flex">
                                    {/* <img
                                        src={ImageConfig[`${imageType}`] || ImageConfig['default']}
                                        alt="upload"
                                        style={{
                                            height: '3.5rem',
                                            objectFit: 'contain',
                                        }}
                                    /> */}
                                    <Box sx={{ ml: 1 }}>
                                        <Typography>{item.name}</Typography>
                                        <Typography variant="body2">{calcSize(item.size)}</Typography>
                                    </Box>
                                </Box>
                                <IconButton
                                    onClick={() => {
                                        if (multiple) {
                                            fileRemove(item);
                                        } else {
                                            fileSingleRemove();
                                        }
                                    }}
                                    sx={{
                                        color: '#df2c0e',
                                        position: 'absolute',
                                        right: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        );
                    })}
                </Stack>
            ) : null}
        </>
    );
};
