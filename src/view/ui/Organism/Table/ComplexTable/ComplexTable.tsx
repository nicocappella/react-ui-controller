import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Box, Checkbox, CircularProgress, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import React from 'react';
import { convertCurrency, convertCurrencyToNumber } from '../../../../../utils/CurrencyFormat';
import { capitalizeWord } from '../../../../../utils/StringFormat';
import { Autocomplete, CurrencyTextField, DatePicker, ImageSelect, Select, UploadButton } from '../../../Atoms';
import { IconButton } from '../../../Atoms/Inputs/Buttons/IconButton/IconButton';
import { Switch } from '../../../Atoms/Inputs/Switch/Switch';
import { TextField } from '../../../Atoms/Inputs/TextFields/TextField/TextField';
import { Head } from './Head';
import Pagination from './Pagination';
import { TableClass } from './TableMethods';
import Toolbar from './Toolbar';
import { BasicCell, Cell, HeadCell, IEditableCellForm } from './table';
import { objectIncludesType } from '../../../../../utils/ObjectFunctions';

export interface IComplexTable<T> {
    confirmEdit: (id: string, value: { [key: string]: string | number | boolean | undefined } | FormData) => void;
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
    headCellsLabelObject?: { [key: string]: { label: string; type?: Cell } };
    isError?: boolean;
    isLoading?: boolean;
    mainButton?: React.ReactNode[];
    pagination?: boolean;
    rows?: T[];
    rowsPerPage?: number;
    rowPerPageOptions?: number[];
    uploadImages?: (name: string, files: File[], id: string | number | undefined) => void;
    title: string;
    toolbar?: boolean;
}

export const ComplexTable = <T extends BasicCell>({
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
    uploadImages,
    title = 'Rows',
    toolbar,
}: IComplexTable<T>) => {
    const tableFunctions = new TableClass();
    const [editdedRowById, setEditedRowById] = React.useState<{ [key: string]: string | number | undefined }>({});
    const [editedRow, setEditedRow] = React.useState<
        { [key: string]: string | number | boolean | Date | (string | { id: string; url: string })[] | File | undefined } | undefined
    >();
    const [editedKeys, setEditedKeys] = React.useState<string[]>([]);
    const [editableCell, setEditableCell] = React.useState<string | number>();
    const [multipartForm, setMultiPartForm] = React.useState(false);
    const [order, setOrder] = React.useState<'asc' | 'desc'>(defaultOrder);
    const [orderBy, setOrderBy] = React.useState(defaultOrderBy);
    const [page, setPage] = React.useState(0);
    const [rowsPerPageState, setRowsPerPageState] = React.useState(rowsPerPage);
    const [selected, setSelected] = React.useState<string[]>([]);
    const [headerCells, setHeaderCells] = React.useState<HeadCell[]>([]);
    const [headerKeys, setHeaderKeys] = React.useState<string[]>([]);
    let headCellTypes = {};
    const obj =
        headCellsLabelObject &&
        Object.keys(headCellsLabelObject).map((d) => {
            headCellTypes = { ...headCellTypes, [d]: headCellsLabelObject[d].type };
            return '';
        });
    const tableRows =
        rows &&
        rows.length > 0 &&
        tableFunctions
            .stableSort<BasicCell>(rows, tableFunctions.getComparator(order, orderBy))
            .slice(page * rowsPerPageState, page * rowsPerPageState + rowsPerPageState);

    const isSelected = (id: string) => selected && selected.indexOf(id) !== -1;

    const handleTypeCell = (
        cell: string | number | boolean | (string | { id: string; url: string })[] | { id: string; url: string } | undefined,
        headCell?: { [key: string]: Cell },
        cellName?: string,
    ) => {
        if (!headCell) {
            if (typeof cell === 'number') {
                return convertCurrency(Number(cell));
            } else if (typeof cell === 'boolean') {
                return <Switch checked={cell} handleChange={() => {}} />;
            } else if (Array.isArray(cell)) {
                const images = (cell as string[]).map((d, i) => <img src={d} width="40px" height="40px" key={`image-${i}`} />);
                return (
                    <Box display="flex" gap="4px" alignItems="center">
                        {images}
                    </Box>
                );
            } else if (typeof cell === 'string' && cell.startsWith('http')) {
                return <img src={cell} width="60px" height="60px" />;
            } else {
                return cell;
            }
        } else if (headCell && cellName) {
            if (headCell[cellName] === 'number' && typeof cell === 'number') {
                return convertCurrency(Number(cell));
            } else if (headCell[cellName] === 'boolean' && typeof cell === 'boolean') {
                return <Switch checked={cell} handleChange={() => {}} />;
            } else if (headCell[cellName] === 'images' && Array.isArray(cell)) {
                const images = (cell as { id: string; url: string }[]).map((d, i) => {
                    if (typeof d === 'string') {
                        return <img src={d} width="40px" height="40px" key={`image-${d}-${i}`} />;
                    } else if (typeof d === 'object') {
                        return <img src={d.url} width="40px" height="40px" key={`image-${d.id}`} />;
                    }
                });
                return (
                    <Box display="flex" gap="4px" alignItems="center">
                        {images}
                    </Box>
                );
            } else if (headCell[cellName] === 'image') {
                if (typeof cell === 'string') {
                    return <img src={cell} width="60px" height="60px" style={{ objectFit: 'contain' }} />;
                } else if (typeof cell === 'object' && !Array.isArray(cell)) {
                    return <img src={cell && cell.url} width="60px" height="60px" style={{ objectFit: 'contain' }} />;
                }
            } else {
                return cell;
            }
        }
    };
    const handleEditCell = (cellForm: IEditableCellForm, cell: string, row: BasicCell) => {
        if (editedRow && cellForm) {
            if (cellForm.formInput === 'textfield') {
                return (
                    <TextField
                        name={cellForm.head}
                        value={typeof editedRow[cell] === 'string' ? (editedRow[cell] as string) : undefined}
                        handleChange={handleEditChange}
                        label=""
                        type="text"
                        variant="outlined"
                        size="small"
                        width={editedRow && typeof editedRow[cell] === 'string' ? '100%' : '100px'}
                    />
                );
            } else if (cellForm.formInput === 'currency') {
                return (
                    <CurrencyTextField
                        name={cellForm.head}
                        value={editedRow[cell] as string | number}
                        handleChange={handleEditChange}
                        label=""
                        variant="outlined"
                        size="small"
                        width={editedRow && typeof editedRow[cell] === 'string' ? '100%' : '100px'}
                    />
                );
            } else if (cellForm.formInput === 'select' && cellForm.options) {
                return (
                    <Select
                        name={cellForm.head}
                        items={cellForm.options}
                        value={
                            typeof cellForm.options[0] === 'string'
                                ? (editedRow[cell] as string)
                                : cellForm.options?.find((d) => d.id === editedRow[cell])
                                ? cellForm.options?.find((d) => d.id === editedRow[cell]).text
                                : (editedRow[cell] as string)
                        }
                        size="small"
                        handleChange={typeof cellForm.options[0] === 'string' ? handleEditChange : undefined}
                        handleObjectClick={typeof cellForm.options[0] === 'object' ? handleEditSelectById : undefined}
                        width="100%"
                    />
                );
            } else if (cellForm.formInput === 'datepicker') {
                return (
                    <DatePicker
                        name={cellForm.head}
                        value={editedRow ? new Date(editedRow[cell] as string) : null}
                        handleChange={handleEditDateChange}
                    />
                );
            } else if (cellForm.formInput === 'autocomplete') {
                return (
                    <Autocomplete
                        name={cellForm.head}
                        options={cellForm.options! as string[]}
                        value={editedRow && editedRow[cell] ? editedRow[cell]!.toString() : ''}
                    />
                );
            } else if (cellForm.formInput === 'switch') {
                return (
                    <Switch
                        name={cellForm.head}
                        checked={editedRow && editedRow[cell] ? (editedRow[cell]! as boolean) : false}
                        handleChange={handleEditChange}
                    />
                );
            } else if (cellForm.formInput === 'images') {
                return (
                    <ImageSelect
                        name={cellForm.head}
                        imgs={editedRow && (editedRow[cell] as string[])}
                        handleFiles={handleEditImagesSelect}
                        id={row.id}
                        handleAddImages={
                            uploadImages
                                ? (name, files, id) => {
                                      uploadImages(name, files, id);
                                      handleCancelEdit();
                                  }
                                : () => {}
                        }
                    />
                );
            } else if (cellForm.formInput === 'image') {
                return (
                    <UploadButton
                        name={cellForm.head}
                        handleChange={handleEditChange}
                        defaultImage={
                            !editedRow[cell] ? undefined : typeof editedRow[cell] === 'string' ? (editedRow[cell] as string) : editedRow[cell]!.url
                        }
                    />
                );
            } else {
                return row[cell];
            }
        }
    };
    const handleEditChange = (name: string | undefined, value: string | number | File | boolean | undefined) => {
        if (name) {
            setEditedRow((prevState) => ({ ...prevState, [name]: value }));
            setEditedKeys((prevState) => [...prevState, name]);
        }
    };
    const handleEditSelectById = (name: string, index: string | number) => {
        if (index && name) {
            setEditedRow((prevState) => ({ ...prevState, [name]: index }));
            setEditedKeys((prevState) => [...prevState, name]);
        }
    };
    const handleEditDateChange = (name: string | undefined, value: Date | null) => {
        if (name && value) {
            setEditedRow((prevState) => ({ ...prevState, [name]: value }));
            setEditedKeys((prevState) => [...prevState, name]);
        }
    };
    const handleEditImagesSelect = (name: string | undefined, value: (string | { id: string; url: string })[]) => {
        if (name) {
            setEditedRow((prevState) => ({ ...prevState, [name]: value }));
            setEditedKeys((prevState) => [...prevState, name]);
        }
    };

    const editRow = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: string | number) => {
        e.stopPropagation();
        const defaultObject = Object.fromEntries(headerKeys.map((d) => [d, undefined]));
        setSelected([]);
        setEditableCell(id);
        setEditedRow(rows.find((d) => d.id === id));
    };
    const handleConfirmEdit = (e: React.FormEvent, id?: string | number) => {
        e.preventDefault();
        if (id && editedRow) {
            const editableCellsByObject = editableCellForms.filter((d) => d.options && typeof d.options[0] === 'object').map((d) => d.head);
            let newEdited = Object.assign(editedRow, editdedRowById);
            Object.keys(newEdited).forEach((d) => {
                if (!editedKeys.includes(d)) {
                    delete newEdited[d];
                }
                if (typeof newEdited[d] === 'string' && (newEdited[d] as string)!.includes(',') && /\d/.test(newEdited[d] as string)) {
                    newEdited[d] = convertCurrencyToNumber(newEdited[d]).toString();
                }
            });
            if (objectIncludesType(newEdited, File)) {
                const formData = new FormData();
                Object.keys(newEdited).map((d) => {
                    formData.append(d, JSON.stringify(newEdited[d]));
                });
                confirmEdit(id.toString(), formData);
            } else {
                confirmEdit(id.toString(), newEdited);
            }
            setEditedRow(undefined);
            setEditableCell(undefined);
        }
    };

    const handleCancelEdit = (e?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => {
        if (e) {
            const { code } = e as React.KeyboardEvent<HTMLElement>;
            if (code && code !== 'Escape') return;
            e.stopPropagation();
        }
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
            if (!headCellsLabelObject) {
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
                const arrayOfHeads = Object.keys(headCellsLabelObject).map<HeadCell>((d) => {
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
                setHeaderKeys(Object.keys(headCellsLabelObject));
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
                                                    <TableCell padding="checkbox" size="small">
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
                                                                sx={{ display: 'table-cell', fontSize: '14px', lineHeight: '20px' }}
                                                                variant="body"
                                                                size="small"
                                                            >
                                                                {handleTypeCell(row[cell], headCellTypes, cell)}
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
                                                                variant="body"
                                                                size="small"
                                                            >
                                                                {cellForm && handleEditCell(cellForm, cell, row)}
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
                                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => {
                                                                            e.stopPropagation();
                                                                            editableFunctions && editableFunctions[i](e, row.id.toString());
                                                                        }}
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
                                                                handleClick={(event) => handleConfirmEdit(event, row.id)}
                                                                type="button"
                                                            >
                                                                <Check color="success" />
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
