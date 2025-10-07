
import type {ApplicationWithPositions} from "@/interfaces/application";
import type {Position} from "@/interfaces/position";
import type {Column, ColumnDef, FilterFn, Row} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";

const  sortingButton = (label: string, column: Column<ApplicationWithPositions>) => (

    <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
        {label}
        <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
);

export const allColumns: ColumnDef<ApplicationWithPositions>[] = [
    {
        header: ({ column }) => sortingButton("ID", column),
        accessorKey: "ID",
        cell: (info) => info.getValue<number>(),
        enableGlobalFilter: true,
    },
    {
        header: ({ column }) => sortingButton("Full Name", column),
        accessorKey: "name",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
    },
    {
        header: ({ column }) => sortingButton("Field of Study", column),
        accessorKey: "fieldOfStudy",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
    },
    {
        header: ({ column }) => sortingButton("Year of Study", column),
        accessorKey: "yearOfStudy",
        cell: (info) => info.getValue<number>(),
        enableGlobalFilter: false,
    },
    {
        header: ({ column }) => sortingButton("Positions", column),
        accessorKey: "positions",
        cell: (info) => {
            const positions = info.getValue() as Position[];
            positions.sort((a: Position, b: Position) => a.preference -  b.preference)
            return positions ? positions[0]!.preference +": "+ positions[0]!.name /*positions.map((value) => value.preference +": " + value.name).join(", ") */: "No Position Submission Found";
        },
        enableGlobalFilter: true,
    },
    {
        header: ({ column }) => sortingButton("Submission Date", column),
        accessorKey: "submissionDate",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: false,
    },
    {
        header: ({ column }) => sortingButton("Experience", column),
        accessorKey: "experience",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
    },
    {
        header: ({ column }) => sortingButton("Description", column),
        accessorKey: "description",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
    },

];

export function columns(chosenColumns: string[]) {
    return allColumns.filter((column) => {
        const accessorKey = "accessorKey" in column ? column.accessorKey : "";
        return chosenColumns.includes(accessorKey);
    });
}


export default allColumns;