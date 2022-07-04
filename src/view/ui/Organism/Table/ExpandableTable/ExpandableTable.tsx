import { Add, Remove } from '@mui/icons-material';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import React from 'react';
import { IconButton } from '../../../Atoms/Inputs/Buttons/IconButton';

interface IProps {
    headCells: { id: string; numeric: boolean; disablePadding: boolean; label: string }[];
    rows: { [key: string]: string }[] | [];
    expand: { expand: boolean }[] | [];
    handleExpandClick: (event: React.MouseEvent, i: number) => void;
}

const ExpandableTable = (props: IProps) => {
    return (
        props.rows && (
            <TableContainer>
                <Table sx={{ minWidth: 750, backgroundColor: '#fff', borderRadius: '4px' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: 50 }} key="action"></TableCell>
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
                                <TableRow key={i}>
                                    <TableCell>
                                        <IconButton
                                            title={`Ver operaciones de ${keys.map((k) => d[k])}`}
                                            handleClick={(event: React.MouseEvent) => {
                                                props.handleExpandClick(event, i);
                                            }}
                                            size="medium"
                                            color="inherit"
                                            
                                        >
                                            {props.expand[i].expand ? <Remove /> : <Add />}
                                        </IconButton>
                                    </TableCell>
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
        )
    );
};

export default ExpandableTable;
