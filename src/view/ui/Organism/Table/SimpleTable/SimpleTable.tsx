import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { HeadCell } from '../ComplexTable/table';
import { capitalizeWord } from '../../../../../utils/StringFormat';

export interface IProps {
    rows: { [key: string]: string | number | undefined }[];
}

export const SimpleTable = ({ rows }: IProps) => {
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
                        {headerCells.map((d, i) => (
                            <TableCell key={i} align={d.align} padding={d.disablePadding ? 'none' : 'normal'}>
                                {d.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((d, i) => {
                        const keys = Object.keys(d);
                        return (
                            <TableRow key={keys[i]}>
                                {keys.map((k, i) => (
                                    <TableCell key={i} align={headerCells[i].align ? 'right' : 'left'}>
                                        {d[k]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
