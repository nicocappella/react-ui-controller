import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Box, Checkbox, CircularProgress, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React from 'react';
import { capitalizeWord } from '../../../../../utils/StringFormat';
import { Autocomplete, CurrencyTextField, DatePicker, Select } from '../../../Atoms';
import { IconButton } from '../../../Atoms/Inputs/Buttons/IconButton/IconButton';
import { Switch } from '../../../Atoms/Inputs/Switch/Switch';
import { TextField } from '../../../Atoms/Inputs/TextFields/TextField/TextField';
import { Head } from './Head';
import Pagination from './Pagination';
import { HeadCell, IEditableCellForm } from './table';
import { TableClass } from './TableMethods';
import Toolbar from './Toolbar';
import { convertCurrency } from '../../../../../utils/CurrencyFormat';

export interface IComplexTable {
    confirmEdit: (id: string, value: { [key: string]: string | number | boolean | undefined }) => void;
    date?: Date | null;
    defaultOrder?: 'asc' | 'desc';
    defaultOrderBy?: string;
    deleteRow: (e: React.MouseEvent<HTMLElement>, value: string | number) => void;
    deleteRows: (rows: string[]) => void;
    dense?: boolean;
    editable?: boolean;
    editableButtons?: React.ReactNode[];
    editableCellForms: IEditableCellForm[];
    editableFunctions?: ((e: React.MouseEvent<HTMLElement>, id: string) => void)[];
    excludeId?: boolean;
    filterButtons?: React.ReactNode[];
    handleDateChange?: (value: Date | null) => void;
    headCells?: string[];
    headCellsLabelObject?: { [key: string]: string };
    isError?: boolean;
    isLoading?: boolean;
    mainButton?: React.ReactNode[];
    pagination?: boolean;
    rows?: { [key: string]: string | number | boolean | undefined; id: string | number }[];
    rowsPerPage?: number;
    rowPerPageOptions?: number[];
    title: string;
    toolbar?: boolean;
}

export const ComplexTable = ({
    confirmEdit,
    date,
    defaultOrder = 'asc',
    defaultOrderBy = 'id',
    deleteRow,
    deleteRows,
    dense,
    editable,
    editableButtons,
    editableCellForms,
    editableFunctions,
    // editRow,
    excludeId = false,
    filterButtons,
    handleDateChange,
    headCells,
    headCellsLabelObject,
    isError,
    isLoading,
    mainButton,
    pagination = true,
    rows = [],
    rowsPerPage = 50,
    rowPerPageOptions = [25, 50, 100],
    title = 'Rows',
    toolbar,
}: IComplexTable) => {
    const tableFunctions = new TableClass();
    const [editdedRowById, setEditedRowById] = React.useState<{ [key: string]: string | undefined }>([]);
    const [editedRow, setEditedRow] = React.useState<{ [key: string]: string | number | boolean | Date | undefined } | undefined>();
    const [editableCell, setEditableCell] = React.useState<string | number>();
    const [order, setOrder] = React.useState<'asc' | 'desc'>(defaultOrder);
    const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
    const [page, setPage] = React.useState(0);
    const [rowsPerPageState, setRowsPerPageState] = React.useState(rowsPerPage);
    const [selected, setSelected] = React.useState<string[]>([]);
    const [headerCells, setHeaderCells] = React.useState<HeadCell[]>([]);
    const [headerKeys, setHeaderKeys] = React.useState<string[]>([]);
    const tableRows =
        rows &&
        rows.length > 0 &&
        tableFunctions
            .stableSort<{ [key: string]: string | number | boolean | undefined; id: string | number }>(
                rows,
                tableFunctions.getComparator(order, orderBy),
            )
            .slice(page * rowsPerPageState, page * rowsPerPageState + rowsPerPageState);

    const isSelected = (id: string) => selected && selected.indexOf(id) !== -1;

    const handleEditInputChange = (name: string | undefined, value: string | undefined) => {
        if (name && value) {
            setEditedRow((prevState) => ({ ...prevState, [name]: value }));
        }
    };
    const handleSwitchChange = (name: string | undefined, checked: boolean) => {
        if (name && checked) {
            setEditedRow((prevState) => ({ ...prevState, [name]: checked }));
        }
    };
    const handleEditSelectChange = (event: SelectChangeEvent<unknown>) => {
        const { name, value } = event.target;
        return setEditedRow((prevState) => ({ ...prevState, [name]: value as string | number }));
    };
    const handleEditSelectById = (event: React.MouseEvent<HTMLElement>, index: string | undefined, name: string) => {
        setEditedRowById((prevState) => ({ ...prevState, [name]: index }));
    };
    const handleEditDateChange = (value: Date | null, name: string) => {
        if (value) {
            setEditedRow((prevState) => ({ ...prevState, [name]: value }));
        }
    };
    const editRow = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string | number) => {
        e.stopPropagation();
        setSelected([]);
        setEditableCell(id);
        setEditedRow(rows.find((d) => d.id === id));
    };
    const handleConfirmEdit = (e: React.MouseEvent<HTMLElement>, id: string) => {
        const editableCellsByObject = editableCellForms.filter((d) => d.options && typeof d.options[0] === 'object').map((d) => d.head);
        const objectKeysNotEdited = editableCellsByObject.filter((d) => !Object.keys(editdedRowById).includes(d));
        const newEdited = Object.assign(editedRow!, editdedRowById);
        Object.keys(newEdited).forEach((d) => {
            if (objectKeysNotEdited.includes(d)) {
                delete newEdited[d];
            }
        });
        console.log(newEdited);
        confirmEdit(id, newEdited);
        setEditedRow(undefined);
        setEditableCell(undefined);
    };
    const handleCancelEdit = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
        const { code } = e as React.KeyboardEvent<HTMLElement>;
        if (code && code !== 'Escape') return;
        e.stopPropagation();
        setEditedRow(undefined);
        setEditableCell(undefined);
    };
    const handleDeleteRow = (e: React.MouseEvent<HTMLElement>, id: string | number) => {
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
        if (editedRow) {
            return setSelected([]);
        }
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
        if (selected.length === 0) {
            tableRows && setSelected(tableRows.map((d) => d.id.toString()));
            return;
        }
        setSelected([]);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setSelected([]);
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPageState(parseInt(event.target.value, 10));
        setSelected([]);
        setPage(0);
    };
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: string) => {
        setSelected([]);
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    React.useLayoutEffect(() => {
        if (rows && rows.length > 0) {
            const highestKeys = rows.sort((a, b) => Object.keys(b).length - Object.keys(a).length)[0];
            if (!headCells) {
                const arrayOfHeads = Object.keys(highestKeys).map<HeadCell>((d) => {
                    const align = typeof highestKeys[d] === 'string' ? 'left' : typeof highestKeys[d] === 'number' ? 'right' : 'center';
                    const disablePadding = d === 'id' ? true : false;
                    return {
                        id: d,
                        align,
                        disablePadding,
                        label: capitalizeWord(d),
                        editable: editable ? editable : false,
                    };
                });
                setHeaderCells([...arrayOfHeads]);
                setHeaderKeys([...Object.keys(highestKeys)]);
            } else {
                const arrayOfHeads = headCells.map<HeadCell>((d) => {
                    const align = typeof highestKeys[d] === 'string' ? 'left' : 'right';
                    const disablePadding = d === 'id' ? true : false;
                    return {
                        id: d,
                        align,
                        disablePadding,
                        label: capitalizeWord(d),
                        editable: editable ? editable : false,
                    };
                });
                setHeaderCells([...arrayOfHeads]);
                setHeaderKeys([...headCells]);
            }
        }
    }, [rows]);

    // React.useEffect(() => {}, [selected]);

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
                        handleDateChange={date ? (value: Date | null) => handleDateChange?.(value) : () => {}}
                        title={title}
                    />
                )}

                <Table
                    sx={{ minWidth: 750, backgroundColor: '#fff', borderRadius: '4px' }}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    onKeyDown={handleCancelEdit}
                >
                    {isError && (
                        <Box display="flex" justifyContent="center" alignItems="center" p="24px" width="100vw">
                            <Typography>No hay {title.toLowerCase()} disponibles</Typography>
                        </Box>
                    )}
                    {isLoading && (
                        <Box display="flex" justifyContent="center" alignItems="center" p="24px" width="100vw">
                            <CircularProgress />
                        </Box>
                    )}
                    {rows && rows.length > 0 && (
                        <>
                            <Head
                                numSelected={selected && selected.length}
                                order={order}
                                excludeId={excludeId}
                                orderBy={orderBy}
                                rowCount={rows!.length}
                                headCells={headerCells && headerCells}
                                headCellsLabelObejct={headCellsLabelObject}
                                onRequestSort={handleRequestSort}
                                onSelectAllClick={handleSelectAllClick}
                                editable={editable}
                            />
                            <TableBody>
                                {tableRows &&
                                    tableRows.map((row, index) => {
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
                                                        <Checkbox
                                                            color="primary"
                                                            checked={isItemSelected}
                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                            sx={{ display: 'table-cell' }}
                                                        />
                                                    </TableCell>
                                                )}
                                                {headerKeys.map((cell, id) => {
                                                    if (excludeId && cell === 'id') return;
                                                    if (editableCell !== row['id']) {
                                                        return (
                                                            <TableCell
                                                                key={id}
                                                                align={
                                                                    typeof row[cell] === 'string'
                                                                        ? 'left'
                                                                        : typeof row[cell] === 'number'
                                                                        ? 'right'
                                                                        : 'center'
                                                                }
                                                                sx={{ display: 'table-cell' }}
                                                            >
                                                                {typeof row[cell] === 'number' ? (
                                                                    convertCurrency(Number(row[cell]))
                                                                ) : typeof row[cell] === 'boolean' ? (
                                                                    <Switch checked={row[cell] as boolean} />
                                                                ) : (
                                                                    row[cell]
                                                                )}
                                                            </TableCell>
                                                        );
                                                    } else if (editableCell === row['id']) {
                                                        const cellForm = editableCellForms.find((d) => d.head === cell);
                                                        return (
                                                            <TableCell
                                                                key={id}
                                                                align={
                                                                    typeof row[cell] === 'string'
                                                                        ? 'left'
                                                                        : typeof row[cell] === 'number'
                                                                        ? 'right'
                                                                        : 'center'
                                                                }
                                                                onClick={() => {}}
                                                                sx={{
                                                                    width: cellForm?.formInput === 'datepicker' ? '160px' : 'auto',
                                                                    display: 'table-cell',
                                                                }}
                                                            >
                                                                {cellForm &&
                                                                    (cellForm.formInput === 'textfield' && typeof row[cell] === 'string' ? (
                                                                        <TextField
                                                                            name={cellForm.head}
                                                                            value={
                                                                                editedRow && editedRow[cell]
                                                                                    ? (editedRow[cell] as string | number)
                                                                                    : ''
                                                                            }
                                                                            handleChange={handleEditInputChange}
                                                                            label=""
                                                                            type="text"
                                                                            variant="outlined"
                                                                            size="small"
                                                                            width={
                                                                                editedRow && typeof editedRow[cell] === 'string' ? '100%' : '100px'
                                                                            }
                                                                        />
                                                                    ) : cellForm.formInput === 'textfield' && typeof row[cell] === 'number' ? (
                                                                        <CurrencyTextField
                                                                            name={cellForm.head}
                                                                            value={
                                                                                editedRow && editedRow[cell]
                                                                                    ? (editedRow[cell] as string | number)
                                                                                    : ''
                                                                            }
                                                                            handleChange={handleEditInputChange}
                                                                            label=""
                                                                            variant="outlined"
                                                                            size="small"
                                                                            width={
                                                                                editedRow && typeof editedRow[cell] === 'string' ? '100%' : '100px'
                                                                            }
                                                                        />
                                                                    ) : cellForm.formInput === 'select' ? (
                                                                        <Select
                                                                            name={cellForm.head}
                                                                            items={cellForm.options}
                                                                            value={editedRow && editedRow[cell] ? editedRow[cell]!.toString() : ''}
                                                                            size="small"
                                                                            handleChange={handleEditSelectChange}
                                                                            handleObjectClick={handleEditSelectById}
                                                                            width="100%"
                                                                        />
                                                                    ) : cellForm.formInput === 'datepicker' ? (
                                                                        <DatePicker
                                                                            name={cellForm.head}
                                                                            value={editedRow ? new Date(editedRow[cell] as string) : null}
                                                                            handleChange={(value) => handleEditDateChange(value, cellForm.head)}
                                                                        />
                                                                    ) : cellForm.formInput === 'autocomplete' ? (
                                                                        <Autocomplete
                                                                            name={cellForm.head}
                                                                            options={cellForm.options! as string[]}
                                                                            value={editedRow && editedRow[cell] ? editedRow[cell]!.toString() : ''}
                                                                        />
                                                                    ) : cellForm.formInput === 'switch' ? (
                                                                        <Switch
                                                                            name={cellForm.head}
                                                                            checked={
                                                                                editedRow && editedRow[cell] ? (editedRow[cell]! as boolean) : false
                                                                            }
                                                                            handleChange={handleSwitchChange}
                                                                        />
                                                                    ) : (
                                                                        row[cell]
                                                                    ))}
                                                            </TableCell>
                                                        );
                                                    }
                                                })}
                                                {editable && editableCell !== row['id'] ? (
                                                    <TableCell align="left" padding="normal" sx={{ display: 'table-cell' }}>
                                                        <Box display="flex" justifyContent="center">
                                                            <IconButton
                                                                handleClick={(e: React.MouseEvent<HTMLElement>) => editRow(e, row.id)}
                                                                title="Editar"
                                                            >
                                                                <Edit />
                                                            </IconButton>

                                                            <IconButton
                                                                handleClick={(e: React.MouseEvent<HTMLElement>) => handleDeleteRow(e, row.id)}
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
                                                        </Box>
                                                    </TableCell>
                                                ) : (
                                                    editable && (
                                                        <TableCell
                                                            align="center"
                                                            sx={{
                                                                backgroundColor: '#fff',
                                                                justifyContent: 'center',
                                                                height: '',
                                                                display: 'table-cell',
                                                            }}
                                                        >
                                                            <IconButton
                                                                title="Aceptar"
                                                                handleClick={(event) => handleConfirmEdit(event, row.id.toString())}
                                                            >
                                                                <Check color="primary" />
                                                            </IconButton>
                                                            <IconButton title="Cancelar" handleClick={handleCancelEdit}>
                                                                <Close color="error" />
                                                            </IconButton>
                                                        </TableCell>
                                                    )
                                                )}
                                            </TableRow>
                                        );
                                    })}
                                {!tableRows && (
                                    <Box display="flex" justifyContent="center" alignItems="center" p="24px" width="100vw">
                                        <CircularProgress />
                                    </Box>
                                )}
                            </TableBody>
                        </>
                    )}
                </Table>
            </TableContainer>
            {pagination && rows!.length > 0 && (
                <Pagination
                    handleChangePage={handleChangePage}
                    page={page}
                    rowPerPageOptions={rowPerPageOptions}
                    rows={rows ? rows : []}
                    rowsPerPage={rowsPerPageState}
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
                />
            )}
        </>
    );
};
