import React from 'react';
import { Button, TablePagination } from '@mui/material';

interface IProps {
    rowPerPageOptions: number[];
    rowsPerPage: number;
    rows: object[];
    page: number;
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Add Autocomplete for each one of the pages. Obviously optional.

const Pagination = ({ rowPerPageOptions, rowsPerPage, rows, page, handleChangePage, handleChangeRowsPerPage }: IProps) => {
    return (
        <TablePagination
            rowsPerPageOptions={rowPerPageOptions}
            component="div"
            labelRowsPerPage="Filas por página"
            count={rows && rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            showFirstButton={rows.length / rowsPerPage > 2}
            showLastButton={rows.length / rowsPerPage > 2}
            
        />
    );
};

export default Pagination;
