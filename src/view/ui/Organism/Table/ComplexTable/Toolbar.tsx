import { Refresh } from '@mui/icons-material';
import { IconButton, Toolbar as MuiToolbar, Typography, alpha } from '@mui/material';
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

const Toolbar = ({ date, handleDateChange, deleteRows, filterButtons, mainButton, numSelected, title }: IProps) => {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    return (
        <MuiToolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                pt: 1,
                pb: 1,
                ...(numSelected > 0 && {
                    bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: numSelected > 0 ? '#000055' : '#f3f2f7',
                borderRadius: '4px',
            }}
        >
            {numSelected > 0 ? (
                <>
                    <Box component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '20%' }}>
                        <Typography
                            // sx={{ flex: '1 1 100%' }}
                            color="Background"
                            variant="subtitle1"
                            component="div"
                        >
                            {numSelected} seleccionado
                        </Typography>
                        <IconButton color="info">
                            <Refresh />
                        </IconButton>
                    </Box>
                    <Button variant="contained" color="error" handleClick={deleteRows} type="button" text="Eliminar varias" />
                </>
            ) : (
                <>
                    <Box display="flex" justifyContent="end" alignItems="center">
                        <Typography variant="h5">{title}&nbsp;</Typography>
                        {date && <DatePicker value={date} key={'date'} handleChange={(value: Date | null) => handleDateChange?.(value)} />}
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: 'space-around', flexGrow: 1 }}>
                        {mainButton && mainButton.map((d, i) => d)}
                        <IconButton>
                            <Refresh />
                        </IconButton>
                    </Box>
                    <Box component="div" sx={{ display: 'flex', justifyContent: 'space-around', flexGrow: 1 }}>
                        {filterButtons && filterButtons.map((d, i) => d)}
                    </Box>
                </>
            )}
        </MuiToolbar>
    );
};
export default Toolbar;
