import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Checkbox, CircularProgress, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';
import { IconButton } from '../../../Atoms/Inputs/Buttons/IconButton/IconButton';
import { TextField } from '../../../Atoms/Inputs/TextFields/TextField/TextField';
import { Head } from './Head';
import Pagination from './Pagination';
import { HeadCell } from './table';
import { TableClass } from './Table';
import Toolbar from './Toolbar';

export interface IComplexTable {
    cancelEdit: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    confirmEdit: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    date?: Date | null;
    deleteRow: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    deleteRows: () => void;
    dense?: boolean;
    editable?: boolean;
    editableButtons?: React.ReactNode[];
    editableCell: string | undefined;
    editableFunctions?: ((e: React.MouseEvent<HTMLElement>, id: string) => void)[];
    editRow: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    filterButtons: React.ReactNode[];
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange?: (value: Date | null) => void;
    handleRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    handleRowClick: (event: React.MouseEvent<unknown>, name: string) => void;
    handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    headCells: HeadCell[];
    mainButton?: React.ReactNode[];
    order: 'asc' | 'desc';
    orderBy: string;
    page: number;
    pagination?: boolean;
    rows: { [key: string]: string | number | undefined }[];
    rowsPerPage: number;
    rowPerPageOptions: number[];
    selected: string[];
    title: string;
    toolbar?: boolean;
}

export const ComplexTable = ({
    cancelEdit,
    confirmEdit,
    date,
    deleteRow,
    deleteRows,
    dense,
    editable,
    editableButtons,
    editableFunctions,
    editRow,
    editableCell,
    filterButtons,
    handleChangePage,
    handleChangeRowsPerPage,
    handleRequestSort,
    handleRowClick,
    handleSelectAllClick,
    headCells,
    order,
    orderBy,
    mainButton,
    page,
    pagination,
    rowPerPageOptions,
    rows,
    rowsPerPage,
    selected,
    title,
    handleDateChange,
    toolbar,
}: IComplexTable) => {
    const tableFunctions = new TableClass();
    const [editedRow, setEditedRow] = React.useState<{ [key: string]: string }>({});
    const isSelected = (name: string) => selected && selected.indexOf(name) !== -1;

    const handleEditedRow = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedRow((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    };
    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        setEditedRow({});
        cancelEdit(e);
    };

    React.useEffect(() => {
        if (handleEditedRow) {
            handleEditedRow(editedRow);
        }
    }, [editedRow]);
    return (
        <>
            <TableContainer sx={{ marginTop: '40px' }}>
                {toolbar && (
                    <Toolbar
                        numSelected={selected && selected.length}
                        mainButton={mainButton}
                        filterButtons={filterButtons}
                        deleteRows={deleteRows}
                        date={date}
                        handleDateChange={(value: Date | null) => handleDateChange?.(value)}
                        title={title}
                    />
                )}

                <Table
                    sx={{ minWidth: 750, backgroundColor: '#fff', borderRadius: '4px' }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    onKeyDown={cancelEdit}
                >
                    <Head
                        numSelected={selected && selected.length}
                        order={order}
                        orderBy={orderBy}
                        rowCount={rows && rows.length}
                        headCells={headCells}
                        onRequestSort={handleRequestSort}
                        onSelectAllClick={handleSelectAllClick}
                        editable={editable}
                    />
                    {!rows && <CircularProgress />}
                    {rows && (
                        <TableBody>
                            {tableFunctions
                                .stableSort<{ [key: string]: string; id: string }>(rows, tableFunctions.getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id.toString());
                                    const labelId = `enhaced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event: React.MouseEvent) => handleRowClick(event, row.id.toString())}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            sx={{
                                                backgroundColor: editableCell === row['id'] ? '#d9e7cb' : '#fff',
                                                '&:hover': {
                                                    backgroundColor: editableCell === row['id'] ? '#d9e7cb !important' : '',
                                                },
                                            }}
                                        >
                                            {editable && (
                                                <TableCell padding="checkbox">
                                                    <Checkbox color="primary" checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                                                </TableCell>
                                            )}
                                            {Object.keys(row).map((cell, id) => {
                                                if (cell === 'id') return;
                                                if (editableCell !== row['id'] || (editableCell === row['id'] && !headCells[id - 1].editable)) {
                                                    return (
                                                        <TableCell key={id} align={typeof row[cell] === 'string' ? 'left' : 'right'}>
                                                            {typeof row[cell] === 'number' ? Number(row[cell]).toFixed(2) : row[cell]}
                                                        </TableCell>
                                                    );
                                                } else if (editableCell === row['id']) {
                                                    return (
                                                        <TableCell
                                                            key={id}
                                                            align={typeof row[cell] === 'string' ? 'left' : 'right'}
                                                            onClick={() => console.log(cell)}
                                                        >
                                                            {/* Crear una variable template del form que iríá incrustado en OperationsTable, y llamarlo con un map a traves de la prop */}
                                                            <TextField
                                                                padding={0.75}
                                                                label=""
                                                                variant="filled"
                                                                value={
                                                                    editedRow[cell.toString()] !== undefined
                                                                        ? editedRow[cell.toString()]
                                                                        : typeof row[cell] === 'number'
                                                                        ? Number(row[cell])
                                                                        : row[cell]
                                                                }
                                                                size="small"
                                                                width={150}
                                                                name={cell}
                                                                type="text"
                                                                handleChange={handleEditedRow}
                                                                isNumber={typeof row[cell] === 'number' && true}
                                                            />
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                            {editable && editableCell !== row['id'] ? (
                                                <TableCell align="left" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                                    <IconButton
                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => editRow(e, row.id.toString())}
                                                        title="Editar"
                                                    >
                                                        <Edit />
                                                    </IconButton>

                                                    <IconButton
                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => deleteRow(e, row.id.toString())}
                                                        title="Eliminar"
                                                    >
                                                        <Delete />
                                                    </IconButton>

                                                    {editableButtons &&
                                                        editableButtons.map((d, i) => (
                                                            <IconButton
                                                                title=""
                                                                key={i}
                                                                handleClick={(e: React.MouseEvent<HTMLElement>) =>
                                                                    editableFunctions && editableFunctions[i](e, row.id.toString())
                                                                }
                                                            >
                                                                {d}
                                                            </IconButton>
                                                        ))}
                                                </TableCell>
                                            ) : (
                                                editable && (
                                                    <TableCell
                                                        align="center"
                                                        sx={{ backgroundColor: '#fff', justifyContent: 'space-around', display: 'flex' }}
                                                    >
                                                        <IconButton
                                                            title="Aceptar"
                                                            handleClick={(e: React.MouseEvent<HTMLElement>) => {
                                                                setEditedRow({});
                                                                confirmEdit(e, row.id.toString());
                                                            }}
                                                        >
                                                            <Check color="primary" />
                                                        </IconButton>
                                                        <IconButton title="Cancelar" handleClick={handleCancel}>
                                                            <Close color="error" />
                                                        </IconButton>
                                                    </TableCell>
                                                )
                                            )}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    )}
                </Table>
            </TableContainer>
            {pagination && (
                <Pagination
                    handleChangePage={handleChangePage}
                    page={page}
                    rowPerPageOptions={rowPerPageOptions}
                    rows={rows}
                    rowsPerPage={rowsPerPage}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            )}
        </>
    );
};
