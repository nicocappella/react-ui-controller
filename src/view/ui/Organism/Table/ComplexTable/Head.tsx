import React from 'react';
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { visuallyHidden } from '@mui/utils';
import { Cell } from './table';

type Order = 'asc' | 'desc';

interface HeadCell {
    id: string;
    align: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
    disablePadding: boolean;
    label: string;
    editable?: boolean;
}

interface IProps {
    editable?: boolean;
    excludeId: boolean;
    headCells: HeadCell[];
    headCellsLabelObejct?: { [key: string]: { label: string; type?: Cell } };
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

export const Head = ({
    onSelectAllClick,
    editable,
    excludeId,
    headCells,
    headCellsLabelObejct,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
}: IProps) => {
    const createSortHandler = (property: any) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };
    const { palette } = useTheme();

    return (
        <TableHead>
            <TableRow sx={{ backgroundColor: palette.primary.main }}>
                {editable && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ 'aria-label': 'select all operations' }}
                            sx={{
                                color: palette.primary.contrastText,
                                '&.MuiCheckbox-indeterminate': { color: palette.primary.contrastText },
                                '&.Mui-checked': { color: palette.primary.contrastText },
                            }}
                        />
                    </TableCell>
                )}

                {headCells.map((headCell) => {
                    if (excludeId && headCell.id === 'id') return;
                    return (
                        <TableCell
                            key={headCell.id}
                            align={headCell.align}
                            padding={headCell.disablePadding ? 'none' : 'normal'}
                            sortDirection={orderBy === headCell.id ? order : false}
                            sx={{ color: palette.primary.contrastText }}
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
                                sx={{
                                    color: palette.primary.contrastText,
                                    fontWeight: 700,
                                    '&.Mui-active': {
                                        color: palette.primary.contrastText,
                                    },
                                }}
                            >
                                {headCellsLabelObejct ? headCellsLabelObejct[headCell.id].label : headCell.label}
                                {orderBy === headCell.id ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descendinrightg' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        </TableCell>
                    );
                })}
                {editable && (
                    <TableCell key="actions" align="center" padding="normal" sx={{ color: palette.primary.contrastText, fontWeight: 700 }}>
                        Acciones
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
    );
};
