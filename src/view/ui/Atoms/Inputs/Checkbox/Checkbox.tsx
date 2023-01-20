import { FormControlLabel, Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { Color } from '../../../types';

type ICheckbox = {
    label: string;
    color?: Color;
};
const Checkbox = ({ label, color, ...props }: ICheckbox & CheckboxProps) => {
    return <FormControlLabel control={<MuiCheckbox {...props} color={color ? color : 'primary'} />} label={label} />;
};

export { Checkbox };
