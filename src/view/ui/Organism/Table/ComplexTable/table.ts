export interface HeadCell {
    id: string;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
    disablePadding: boolean;
    type: Cell;
    label: string;
    editable?: boolean;
}
export interface IEditableCellForm {
    formInput: 'textfield' | 'currency' | 'select' | 'datepicker' | 'autocomplete' | 'switch' | 'images' | 'image' | 'file' | 'none';
    options?: string[] | Array<{ id: string | number; text: string }>;
    head: string;
}

export type Cell = 'string' | 'number' | 'currency' | 'boolean' | 'image' | 'images' | 'file';

export const verifyCell = (cell: string) => {
    if (typeof cell === 'string') {
        if (cell.startsWith('http')) {
            return 'image';
        } else {
            return 'string';
        }
    } else if (typeof cell === 'number') {
        return 'number';
    } else if (typeof cell === 'boolean') {
        return 'boolean';
    } else if (Array.isArray(cell)) {
        return 'images';
    } else if (typeof cell === 'object' && cell['id']) {
        return 'images';
    } else return 'string';
};
export type BasicCell = {
    [key: string]: string | (string | { id: string; url: string })[] | { id: string; url: string } | number | boolean | undefined;
    id: string | number;
};
