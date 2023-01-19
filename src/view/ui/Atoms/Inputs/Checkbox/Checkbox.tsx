import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { Color } from '../../../types';

type ICheckbox = {
    label: string;
    color?: Color;
};
const Checkbox = ({ label, color, ...props }: ICheckbox) => {
    return <FormControlLabel control={<MuiCheckbox color={color ? color : 'primary'} {...props} />} label={label} />;
};

export { Checkbox };
