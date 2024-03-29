import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography, CircularProgress } from '@mui/material';
import { BasicCell, HeadCell, verifyCell } from '../ComplexTable/table';
import { capitalizeWord } from '../../../../../utils/StringFormat';
import { Box } from '@mui/system';

export interface ISimpleTable<T> {
    excludeId?: boolean;
    headCellsLabelObject?: { [key: string]: string };
    isError?: boolean;
    isLoading?: boolean;
    rows: T[];
}

export const SimpleTable = <T extends BasicCell>({ rows, excludeId, headCellsLabelObject, isLoading, isError }: ISimpleTable<T>) => {
    const [headerCells, setHeaderCells] = React.useState<HeadCell[]>([]);
    const [headerKeys, setHeaderKeys] = React.useState<string[]>([]);
    React.useLayoutEffect(() => {
        if (rows && rows.length > 0) {
            const highestKeys = rows.sort((a, b) => Object.keys(b).length - Object.keys(a).length)[0];
            const arrayOfHeads = Object.keys(highestKeys).map<HeadCell>((d) => {
                const align = typeof highestKeys[d] === 'string' ? 'left' : 'right';
                const disablePadding = d === 'id' ? true : false;
                return {
                    id: d,
                    align,
                    disablePadding,
                    label: capitalizeWord(d),
                    type: 'string',
                };
            });
            setHeaderCells([...arrayOfHeads]);
            setHeaderKeys([...Object.keys(highestKeys)]);
        }
    }, [rows]);
    return (
        <TableContainer>
            <Table>
                {isError && (
                    <Box display="flex" justifyContent="center" alignItems="center" p="24px" width="100vw">
                        <Typography>No hay información disponible</Typography>
                    </Box>
                )}
                {isLoading && (
                    <Box display="flex" justifyContent="center" alignItems="center" p="24px" width="100vw">
                        <CircularProgress />
                    </Box>
                )}
                {rows && rows.length > 0 && (
                    <>
                        <TableHead>
                            <TableRow>
                                {headerCells.map((headCell, i) => {
                                    if (excludeId && headCell.id === 'id') return;
                                    return (
                                        <TableCell key={i} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
                                            {headCellsLabelObject ? headCellsLabelObject[headCell.id] : headCell.label}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row, i) => {
                                return (
                                    <TableRow key={i}>
                                        {headerKeys.map((cell, index) => {
                                            if (excludeId && cell === 'id') return;
                                            return (
                                                <TableCell key={index} align={typeof row[cell] === 'string' ? 'left' : 'right'}>
                                                    {row[cell]}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </>
                )}
            </Table>
        </TableContainer>
    );
};
