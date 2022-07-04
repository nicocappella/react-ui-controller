import { Button, TablePagination } from '@mui/material';
import React from 'react';

interface IProps {
    rowPerPageOptions: number[];
    rowsPerPage: number;
    rows: object[];
    page: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Pagination = (props: IProps) => {
    return (
        <TablePagination
            rowsPerPageOptions={props.rowPerPageOptions}
            component="div"
            labelRowsPerPage="Filas por página"
            count={props.rows && props.rows.length}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onPageChange={props.handleChangePage}
            onRowsPerPageChange={props.handleChangeRowsPerPage}
        />
    );
};

export default Pagination;
