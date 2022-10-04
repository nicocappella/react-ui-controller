import { FormControlLabel, Checkbox as MuiCheckbox } from '@mui/material';
import { Color } from '../../../types';

type ICheckbox = {
    label: string;
    color?: Color;
};
const Checkbox = (props: ICheckbox) => {
    return <FormControlLabel control={<MuiCheckbox color={props.color ? props.color : 'primary'} />} label={props.label} />;
};

export { Checkbox };
