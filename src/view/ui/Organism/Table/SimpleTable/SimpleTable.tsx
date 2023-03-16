import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Typography, CircularProgress } from '@mui/material';
import { HeadCell } from '../ComplexTable/table';
import { capitalizeWord } from '../../../../../utils/StringFormat';
import { Box } from '@mui/system';

export interface IProps {
    rows: { [key: string]: string | number | undefined; id: string | number }[];
    excludeId?: boolean;
    isLoading?: boolean;
    isError?: boolean;
}

export const SimpleTable = ({ rows, excludeId, isLoading, isError }: IProps) => {
    const [headerCells, setHeaderCells] = React.useState<HeadCell[]>([]);
    const [headerKeys, setHeaderKeys] = React.useState<string[]>([]);
    console.log('rows', rows);
    console.log('headerCells', headerCells);
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
                <TableHead>
                    <TableRow>
                        {headerCells.map((headCell, i) => {
                            if (excludeId && headCell.id === 'id') return;
                            return (
                                <TableCell key={i} align={headCell.align} padding={headCell.disablePadding ? 'none' : 'normal'}>
                                    {headCell.label}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows &&
                        rows.length > 0 &&
                        rows.map((row, i) => {
                            return (
                                <TableRow key={i}>
                                    {headerKeys.map((cell, index) => {
                                        if (excludeId && cell === 'id') return;
                                        return (
                                            <TableCell key={i} align={typeof row[cell] === 'string' ? 'left' : 'right'}>
                                                {row[cell]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
