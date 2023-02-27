import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Box, Checkbox, CircularProgress, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';
import { IconButton } from '../../../Atoms/Inputs/Buttons/IconButton/IconButton';
import { TextField } from '../../../Atoms/Inputs/TextFields/TextField/TextField';
import { Head } from './Head';
import Pagination from './Pagination';
import { HeadCell } from './table';
import { TableClass } from './TableMethods';
import Toolbar from './Toolbar';

export interface IComplexTable {
    cancelEdit: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    confirmEdit: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    date?: Date | null;
    deleteRow: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    deleteRows: (rows: string[]) => void;
    dense?: boolean;
    editable?: boolean;
    editableButtons?: React.ReactNode[];
    editableCell: string | undefined;
    editableFunctions?: ((e: React.MouseEvent<HTMLElement>, id: string) => void)[];
    editRow: (e: React.MouseEvent<HTMLElement>, value: string) => void;
    filterButtons: React.ReactNode[];
    handleDateChange?: (value: Date | null) => void;
    handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    headCells: HeadCell[];
    mainButton?: React.ReactNode[];
    pagination?: boolean;
    rows: { [key: string]: string | number; id: string }[];
    rowPerPageOptions: number[];
    title: string;
    toolbar?: boolean;
}

export const ComplexTable = ({
    cancelEdit,
    confirmEdit,
    date = new Date(),
    deleteRow,
    deleteRows,
    dense,
    editable,
    editableButtons,
    editableCell,
    editableFunctions,
    editRow,
    filterButtons,
    handleDateChange,
    // handleSelectAllClick,
    headCells,
    mainButton,
    pagination = true,
    rows,
    rowPerPageOptions,
    title = 'Example Table',
    toolbar,
}: IComplexTable) => {
    const tableFunctions = new TableClass();
    const [editedRow, setEditedRow] = React.useState<{ [key: string]: string }>({});
    const [cleanUpRows, setCleanUpRows] = React.useState<{ [key: string]: string | number; id: string }[]>(rows);
    const [order, setOrder] = React.useState<'asc' | 'desc'>('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);
    const [selected, setSelected] = React.useState<string[]>([]);

    const tableRows = tableFunctions
        .stableSort<{ [key: string]: string | number; id: string }>(cleanUpRows, tableFunctions.getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const isSelected = (id: string) => selected && selected.indexOf(id) !== -1;

    const handleEditedRow = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedRow((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        setEditedRow({});
        cancelEdit(e);
    };
    const handleDeleteRow = (e: React.MouseEvent<HTMLElement>, id: string) => {
        e.stopPropagation();
        deleteRow(e, id);
        setSelected([]);
    };
    const handleDeleteRows = () => {
        deleteRows(selected);
        setSelected([]);
    };

    const handleRowClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];
        // if (editedRow) return;
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }

        setSelected(newSelected);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setSelected(tableRows.map((d) => d.id.toString()));
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setSelected([]);
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setSelected([]);
        setPage(0);
    };

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        setSelected([]);
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    React.useEffect(() => {
        editable &&
            headCells.push({
                id: 'actions',
                align: 'center',
                disablePadding: false,
                label: 'Acciones',
                editable: false,
            });

        if (Object.keys(rows[0]).includes('_id')) {
            setCleanUpRows(rows.map((d) => ({ ...d, id: d._id.toString() })));
        }
        // if (handleEditedRow) {
        //     handleEditedRow(editedRow);
        // }
    }, [cleanUpRows]);

    React.useEffect(() => {}, [selected]);
    return (
        <>
            <TableContainer sx={{ marginTop: '40px' }}>
                {toolbar && (
                    <Toolbar
                        numSelected={selected && selected.length}
                        mainButton={mainButton}
                        filterButtons={filterButtons}
                        deleteRows={handleDeleteRows}
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
                    {!cleanUpRows && (
                        <Box display="flex" justifyContent="center" alignItems="center" p="24px" width="100vw">
                            <CircularProgress />
                        </Box>
                    )}
                    {cleanUpRows && (
                        <>
                            <Head
                                numSelected={selected && selected.length}
                                order={order}
                                orderBy={orderBy}
                                rowCount={cleanUpRows && cleanUpRows.length}
                                headCells={headCells}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                                editable={editable}
                            />
                            <TableBody>
                                {tableRows.map((row, index) => {
                                    const includeId = !Object.values(headCells.map((d) => d.id)).includes('id');
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
                                                backgroundColor: isItemSelected ? '#d9e7cb' : '#fff',
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
                                                if (includeId && row['id']) return;
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
                                                <TableCell align="left" padding="normal">
                                                    <IconButton
                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => editRow(e, row.id.toString())}
                                                        title="Editar"
                                                    >
                                                        <Edit />
                                                    </IconButton>

                                                    <IconButton
                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => handleDeleteRow(e, row.id.toString())}
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
                        </>
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
