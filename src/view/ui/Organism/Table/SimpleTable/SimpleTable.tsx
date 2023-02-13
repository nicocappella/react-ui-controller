import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export interface IProps {
    headCells: { id: string; numeric: boolean; disablePadding: boolean; label: string }[];
    rows: { [key: string]: string | number | undefined }[];
}

export const SimpleTable = (props: IProps) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {props.headCells.map((d, i) => (
                            <TableCell key={i} align={d.numeric ? 'right' : 'left'} padding={d.disablePadding ? 'none' : 'normal'}>
                                {d.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.map((d, i) => {
                        const keys = Object.keys(d);
                        return (
                            <TableRow key={keys[i]}>
                                {keys.map((k, i) => (
                                    <TableCell key={i} align={props.headCells[i].numeric ? 'right' : 'left'}>
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
