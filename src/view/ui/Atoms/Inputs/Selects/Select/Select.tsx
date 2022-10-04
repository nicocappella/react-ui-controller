import { InputLabel, MenuItem, Select as MuiSelect, FormControl, ListItemIcon, ListItemText, SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';

export interface IProps {
    itemWithIcon?: boolean;
    items?: string[];
    itemsObject?: { icon: string; text: string }[];
    label?: string;
    name: string;
    value: string;
    size?: 'medium' | 'small';
    handleChange: (e: SelectChangeEvent<string>) => void;
}

const Select = (props: IProps) => {
    return (
        <FormControl>
            <InputLabel>{props.label}</InputLabel>
            <MuiSelect
                labelId={props.label}
                value={props.value}
                id={props.label}
                onChange={props.handleChange}
                name={props.name}
                size={props.size}
                required
                label={props.label}
                renderValue={(value: any) => <Box component="div">{value}</Box>}
            >
                {props.itemWithIcon
                    ? props.itemsObject!.map((d, i) => (
                          <MenuItem key={i} value={d.text}>
                              <ListItemIcon>{d.icon}</ListItemIcon>
                              <ListItemText>{d.text}</ListItemText>
                          </MenuItem>
                      ))
                    : props.items?.map((d, i) => (
                          <MenuItem key={i} value={d}>
                              {d}
                          </MenuItem>
                      ))}
            </MuiSelect>
        </FormControl>
    );
};

export { Select };
