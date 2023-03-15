export type HeadCell = {
    id: string;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
    disablePadding: boolean;
    label: string;
    editable?: boolean;
};
