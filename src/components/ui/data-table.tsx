"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getExpandedRowModel, getPaginationRowModel,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Member, ApplicationValues } from "@/interfaces/application";
import {ExpandableComponent} from "@/components/applicantArchive/ExpandableComponent";
import { Button } from "@/components/ui/button";
import {ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight} from "lucide-react";
import {useState} from "react";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

const member1: Member = { name: "Wasabiy" };
const member2: Member = { name: "Hanna" };
const member3: Member = { name: "Bana Nana" };
const allMembers: Member[] = [member1, member2, member3];

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 5, //default page size
    });

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination, //update the pagination state when internal APIs mutate the pagination state
        state: {
            pagination,
        },
        getExpandedRowModel: getExpandedRowModel(),
        defaultColumn: {
            size: 300, //starting column size
            maxSize: 300, //enforced during column resizing
        },
    });

    return (
        <div className="">
            <div className="flex items-center space-x-2" id={"paginationMenu"}>
                <Button
                    variant="outline"
                    className="hidden h-8 w-8 p-0 lg:flex bg-slate-700 rounded-lg border-solid border-sky-200  "
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to first page</span>
                    <ChevronsLeft />
                </Button>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0 bg-slate-700 rounded-lg border-solid border-sky-200  "
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeft />
                </Button>
                <Button
                    variant="outline"
                    className="h-8 w-8 bg-slate-700 rounded-lg border-solid border-sky-200 p-0"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to next page</span>
                    <ChevronRight />
                </Button>
                <Button
                    variant="outline"
                    className="hidden h-8 w-8  lg:flex bg-slate-700 rounded-lg border-solid border-sky-200 "
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to last page</span>
                    <ChevronsRight />
                </Button>
                <select
                    value={table.getState().pagination.pageSize}
                    className={"text-slate-100 bg-slate-700 rounded-lg border-solid border-sky-200 m-1  p-2 "}
                    onChange={e => {
                        table.setPageSize(Number(e.target.value));
                    }}
                >
                    {[5, 10, 15, 20, 25].map(pageSize => (
                        <option className={" text-slate-100 p-2 m-1"} key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </select>
                {Array.from({ length: table.getPageCount() }, (_, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className={`text-slate-100 h-8 w-8 p-0 ${table.getState().pagination.pageIndex === index ? "bg-sky-700" : ""}`}
                        onClick={() => table.setPageIndex(index)}
                        disabled={table.getState().pagination.pageIndex === index}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
            <Table className={"w-fit h-fit text-slate-100 rounded-lg border-solid border-sky-200"}>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow className={"text-slate-100 font-semibold text-base font-light"} key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead className={"!bg-slate-800"} key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className={"text-sm !bg-slate-800"}>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <>
                                <TableRow
                                    key={row.id}
                                    className={"cursor-pointer text-lg"}
                                    data-state={row.getIsSelected() && "selected"}
                                    onClick={ ()=> row.toggleExpanded()}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id + row.id}  >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                                {row.getIsExpanded() && (
                                    <TableRow>
                                        <TableCell colSpan={columns.length}>
                                            <ExpandableComponent
                                                allMember={allMembers}
                                                data={row.original as ApplicationValues}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )}
                            </>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>

            </Table>

        </div>
    );
}
