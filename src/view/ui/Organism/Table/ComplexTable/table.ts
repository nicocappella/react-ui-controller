export interface HeadCell {
    id: string;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
    disablePadding: boolean;
    type: Cell;
    label: string;
    editable?: boolean;
}
export interface IEditableCellForm {
    formInput: 'textfield' | 'select' | 'datepicker' | 'autocomplete' | 'switch' | 'images' | 'image' | 'file' | 'none';
    options?: string[] | { id: string | number; text: string }[];
    others?: 'currency';
    head: string;
}

export type Cell = 'string' | 'number' | 'boolean' | 'currency' | 'image' | 'images' | 'file';

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
