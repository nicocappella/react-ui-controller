import React from 'react';
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
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
    return (
        <TableHead>
            <TableRow>
                {editable && (
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={rowCount > 0 && numSelected === rowCount}
                            onChange={onSelectAllClick}
                            inputProps={{ 'aria-label': 'select all operations' }}
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
                        >
                            <TableSortLabel
                                active={orderBy === headCell.id}
                                direction={orderBy === headCell.id ? order : 'asc'}
                                onClick={createSortHandler(headCell.id)}
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
                    <TableCell key="actions" align="center" padding="normal">
                        Acciones
                    </TableCell>
                )}
            </TableRow>
        </TableHead>
    );
};
