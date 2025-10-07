import {
    type ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getExpandedRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    ColumnFiltersState, SortingState, getSortedRowModel,
} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Member, ApplicationWithPositions, Comment } from "@/interfaces/application";
import {ExpandableComponent} from "@/components/applicantArchive/ExpandableComponent";
import {useState} from "react";
import {PaginationMenu} from "@/components/applicantArchive/PaginationMenu";
import SearchComponent from "@/components/applicantArchive/SearchComponent";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

const member1: Member = { name: "Wasabiy" };
const member2: Member = { name: "Hanna" };
const member3: Member = { name: "Bana Nana" };
const allMembers: Member[] = [member1, member2, member3];


const commentPlaceholder: Comment = {comment: "Nothing here yet"}

export function DataTable<TData, TValue>({
                                             columns,
                                             data,
                                         }: DataTableProps<TData, TValue>) {
    const [pagination, setPagination] = useState({
        pageIndex: 0, //initial page index
        pageSize: 5, //default page size
    });

    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState<string>("")

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        getExpandedRowModel: getExpandedRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        state: {
            sorting,
            globalFilter,
            pagination,
        },
        defaultColumn: {
            size: 300,
            maxSize: 300,
        },
    });

    return (
      <div className="p-0 m-0 flex max-h-full min-h-screen w-full flex-col">
        <PaginationMenu  table={table}></PaginationMenu>
        <div className="flex-grow overflow-none">
            <SearchComponent table={table} ></SearchComponent>
          <Table
            className={
              "min-w-full border-solid border-sky-200 text-slate-100"
            }
          >
            <TableHeader className="sticky top-0 z-8">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  className={"text-base font-semibold text-slate-100"}
                  key={headerGroup.id}
                >
                  {headerGroup.headers.map((header) => (
                    <TableHead className={"!bg-slate-800"} key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className={"bg-slate-800 text-md"}>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <>
                    <TableRow
                      key={row.id}
                      className={"cursor-pointer text-lg"}
                      data-state={row.getIsSelected() && "selected"}
                      onClick={() => row.toggleExpanded()}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell className={""} key={cell.id + row.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                    {row.getIsExpanded() && (

                        <TableCell
                          className={"bg-slate-700 border"}
                          colSpan={columns.length}
                        >
                          <ExpandableComponent
                            allMember={allMembers}
                            data={row.original as ApplicationWithPositions}
                            comment={commentPlaceholder}
                          />
                        </TableCell>
                    )}
                  </>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
            <PaginationMenu  table={table}></PaginationMenu>
        </div>
      </div>
    );
}
