import Compressor from 'compressorjs';

export const compressAsync = async (file: File | Blob, options: Compressor.Options) => {
    const result = await new Promise<Blob>((resolve, reject) => {
        new Compressor(file, {
            ...options,
            success: resolve,
            error: reject,
        });
    });
    return result;
};
