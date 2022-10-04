import { ArrowBackIos, ArrowForwardIos, Refresh } from '@mui/icons-material';
import { alpha, IconButton, Toolbar as MuiToolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Button } from '../../../Atoms/Inputs/Buttons/Button/Button';
import { DatePicker } from '../../../Atoms/Inputs/Selects/DatePicker/DatePicker';

interface IProps {
    date?: Date | null;
    handleDateChange?: (value: Date | null) => void;
    deleteRows: () => void;
    filterButtons?: React.ReactNode[];
    mainButton?: React.ReactNode[];
    numSelected: number;
    title: string;
}

const Toolbar = (props: IProps) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    return (
        <MuiToolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(props.numSelected > 0 && {
                    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: props.numSelected > 0 ? '#000055' : '#f3f2f7',
                borderRadius: '4px',
            }}
        >
            {props.numSelected > 0 ? (
                <>
                    <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '20%' }}>
                        <Typography
                            // sx={{ flex: '1 1 100%' }}
                            color="Background"
                            variant="subtitle1"
                            component="div"
                        >
                            {props.numSelected} seleccionado
                        </Typography>
                        <IconButton color="info">
                            <Refresh />
                        </IconButton>
                    </Box>
                    <Button variant="contained" color="error" handleClick={props.deleteRows} type="button" text="Eliminar varias" />
                </>
            ) : (
                <>
                    <Box display="flex" justifyContent="end">
                        <Typography variant="h5">{props.title}&nbsp;</Typography>
                        {props.date && (
                            <DatePicker value={props.date} key={'date'} handleChange={(value: Date | null) => props.handleDateChange?.(value)} />
                        )}
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: 'space-around', flexGrow: 1 }}>
                        {props.mainButton && props.mainButton.map((d, i) => d)}
                        <IconButton>
                            <Refresh />
                        </IconButton>
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: 'space-around', flexGrow: 1 }}>
                        {props.filterButtons && props.filterButtons.map((d, i) => d)}
                    </Box>
                </>
            )}
        </MuiToolbar>
    );
};
export default Toolbar;
