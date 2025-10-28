import { Button } from "@/components/ui/button";
import {type Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface PaginationMenuProps<TData> {
    table: Table<TData>;
}

export function PaginationMenu<TData>({ table }: PaginationMenuProps<TData>) {
    return (
        <div className="flex items-center space-x-2 mb-4" id={"paginationMenu"}>
            <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex bg-slate-700 rounded-lg border-solid border-sky-200"
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
            >
                <span className="sr-only">Go to first page</span>
                <ChevronsLeft />
            </Button>
            <Button
                variant="outline"
                className="h-8 w-8 p-0 bg-slate-700 rounded-lg border-solid border-sky-200"
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
                className="hidden h-8 w-8 lg:flex bg-slate-700 rounded-lg border-solid border-sky-200"
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
            >
                <span className="sr-only">Go to last page</span>
                <ChevronsRight />
            </Button>
            <select
                value={table.getState().pagination.pageSize}
                className={"text-slate-100 bg-slate-700 rounded-lg border-solid border-sky-200 m-1 p-2"}
                onChange={e => {
                    table.setPageSize(Number(e.target.value));
                }}
            >
                {[5, 10, 15, 20, 25].map(pageSize => (
                    <option className={"text-slate-100 p-2 m-1"} key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))}
            </select>
            {Array.from({ length: table.getPageCount() }, (_, index) => (
                <Button
                    key={index}
                    variant="default"
                    className={` border opacity-100 text-slate-100 h-8 w-8 p-0 ${table.getState().pagination.pageIndex === index ? "!bg-slate-400 !opacity-80 text-white" : "!bg-slate-800"}`}
                    onClick={() => table.setPageIndex(index)}
                    disabled={table.getState().pagination.pageIndex === index}
                >
                    {index + 1}
                </Button>
            ))}
        </div>
    );
}