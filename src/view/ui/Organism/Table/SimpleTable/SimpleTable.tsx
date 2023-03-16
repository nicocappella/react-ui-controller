import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { HeadCell } from '../ComplexTable/table';
import { capitalizeWord } from '../../../../../utils/StringFormat';

export interface IProps {
    rows: { [key: string]: string | number | undefined; id: string | number }[];
    excludeId?: boolean;
}

export const SimpleTable = ({ rows, excludeId }: IProps) => {
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
                };
            });
            setHeaderCells([...arrayOfHeads]);
            setHeaderKeys([...Object.keys(highestKeys)]);
        }
    }, [rows]);
    return (
        <TableContainer>
            <Table>
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
