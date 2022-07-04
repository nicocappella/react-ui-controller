import { Check, Close, Delete, Edit } from '@mui/icons-material';
import { Checkbox, CircularProgress, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import React from 'react';
import { IconButton } from '../../../Atoms/Inputs/Buttons/IconButton';
import { TextField, Types } from '../../../Atoms/Inputs/TextField/TextField';
import { Head } from './Head';
import Pagination from './Pagination';
import { HeadCell } from './table';
import { TableClass } from './Table';
import Toolbar from './Toolbar';

interface IBody {
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
    editedRow?: { [key: string]: string };
    filterButtons: React.ReactNode[];
    handleChangePage: (event: unknown, newPage: number) => void;
    handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDateChange?: (value: Date | null) => void;
    handleEditedRow: (obj: object) => void;
    handleRequestSort: (event: React.MouseEvent<unknown>, property: any) => void;
    handleRowClick: (event: React.MouseEvent<unknown>, name: string) => void;
    handleSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    headCells: HeadCell[];
    mainButton?: React.ReactNode[];
    order: 'asc' | 'desc';
    orderBy: string;
    page: number;
    pagination?: boolean;
    rows: { id: string }[];
    rowsPerPage: number;
    rowPerPageOptions: number[];
    selected: string[];
    title: string;
    toolbar?: boolean;
}

export const Body = (props: IBody) => {
    const tableFunctions = new TableClass();
    const [editedRow, setEditedRow] = React.useState<{ [key: string]: string }>({});
    const isSelected = (name: string) => props.selected && props.selected.indexOf(name) !== -1;

    const handleEditedRow = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditedRow((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
    };
    const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
        setEditedRow({});
        props.cancelEdit(e);
    };

    React.useEffect(() => {
        if (props.handleEditedRow) {
            props.handleEditedRow(editedRow);
        }
    }, [editedRow, props]);
    return (
        <>
            <TableContainer sx={{ marginTop: '40px' }}>
                {props.toolbar && (
                    <Toolbar
                        numSelected={props.selected && props.selected.length}
                        mainButton={props.mainButton}
                        filterButtons={props.filterButtons}
                        deleteRows={props.deleteRows}
                        date={props.date}
                        handleDateChange={(value: Date | null) => props.handleDateChange?.(value)}
                        title={props.title}
                    />
                )}

                <Table
                    sx={{ minWidth: 750, backgroundColor: '#fff', borderRadius: '4px' }}
                    aria-labelledby="tableTitle"
                    size={props.dense ? 'small' : 'medium'}
                    onKeyDown={props.cancelEdit}
                >
                    <Head
                        numSelected={props.selected && props.selected.length}
                        order={props.order}
                        orderBy={props.orderBy}
                        rowCount={props.rows && props.rows.length}
                        headCells={props.headCells}
                        onRequestSort={props.handleRequestSort}
                        onSelectAllClick={props.handleSelectAllClick}
                        editable={props.editable}
                    />
                    {!props.rows && <CircularProgress />}
                    {props.rows && (
                        <TableBody>
                            {tableFunctions
                                .stableSort<{ [key: string]: string; id: string }>(
                                    props.rows,
                                    tableFunctions.getComparator(props.order, props.orderBy),
                                )
                                .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.id.toString());
                                    const labelId = `enhaced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event: React.MouseEvent) => props.handleRowClick(event, row.id.toString())}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                            sx={{
                                                backgroundColor: props.editableCell === row['id'] ? '#d9e7cb' : '#fff',
                                                '&:hover': {
                                                    backgroundColor: props.editableCell === row['id'] ? '#d9e7cb !important' : '',
                                                },
                                            }}
                                        >
                                            {props.editable && (
                                                <TableCell padding="checkbox">
                                                    <Checkbox color="primary" checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                                                </TableCell>
                                            )}
                                            {Object.keys(row).map((cell, id) => {
                                                if (cell === 'id') return;
                                                if (
                                                    props.editableCell !== row['id'] ||
                                                    (props.editableCell === row['id'] && !props.headCells[id - 1].editable)
                                                ) {
                                                    return (
                                                        <TableCell key={id} align={typeof row[cell] === 'string' ? 'left' : 'right'}>
                                                            {typeof row[cell] === 'number' ? Number(row[cell]).toFixed(2) : row[cell]}
                                                        </TableCell>
                                                    );
                                                } else if (props.editableCell === row['id']) {
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
                                                                type={Types.Text}
                                                                handleChange={handleEditedRow}
                                                                isNumber={typeof row[cell] === 'number' && true}
                                                            />
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                            {props.editable && props.editableCell !== row['id'] ? (
                                                <TableCell align="left" sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                                    <IconButton
                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => props.editRow(e, row.id.toString())}
                                                        title="Editar"
                                                    >
                                                        <Edit />
                                                    </IconButton>

                                                    <IconButton
                                                        handleClick={(e: React.MouseEvent<HTMLElement>) => props.deleteRow(e, row.id.toString())}
                                                        title="Eliminar"
                                                    >
                                                        <Delete />
                                                    </IconButton>

                                                    {props.editableButtons &&
                                                        props.editableButtons.map((d, i) => (
                                                            <IconButton
                                                                title=""
                                                                key={i}
                                                                handleClick={(e: React.MouseEvent<HTMLElement>) =>
                                                                    props.editableFunctions && props.editableFunctions[i](e, row.id.toString())
                                                                }
                                                            >
                                                                {d}
                                                            </IconButton>
                                                        ))}
                                                </TableCell>
                                            ) : (
                                                props.editable && (
                                                    <TableCell
                                                        align="center"
                                                        sx={{ backgroundColor: '#fff', justifyContent: 'space-around', display: 'flex' }}
                                                    >
                                                        <IconButton
                                                            title="Aceptar"
                                                            handleClick={(e: React.MouseEvent<HTMLElement>) => {
                                                                setEditedRow({});
                                                                props.confirmEdit(e, row.id.toString());
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
            {props.pagination && (
                <Pagination
                    handleChangePage={props.handleChangePage}
                    page={props.page}
                    rowPerPageOptions={props.rowPerPageOptions}
                    rows={props.rows}
                    rowsPerPage={props.rowsPerPage}
                    handleChangeRowsPerPage={props.handleChangeRowsPerPage}
                />
            )}
        </>
    );
};
