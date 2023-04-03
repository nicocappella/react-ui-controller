export interface HeadCell {
    id: string;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
    disablePadding: boolean;
    label: string;
    editable?: boolean;
}
export interface IEditableCellForm {
    formInput: 'textfield' | 'select' | 'datepicker' | 'autocomplete' | 'switch' | 'none';
    options?: string[] | { id: string | number; text: string }[];
    others?: 'currency';
    head: string;
}
