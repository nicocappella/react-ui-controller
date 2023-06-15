import Compressor from 'compressorjs';

export const compressAsync = async (file: File, options: Compressor.Options) => {
    const result = await new Promise<Blob>((resolve, reject) => {
        new Compressor(file, {
            ...options,
            success: resolve,
            error: reject,
        });
    });
    const newFileCompressed = new File([result], file.name);
    return newFileCompressed;
};
