
import type {ApplicationWithPositions} from "@/interfaces/application";
import type {Position} from "@/interfaces/position";
import type {Column, ColumnDef} from "@tanstack/react-table";
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


export const columns: ColumnDef<ApplicationWithPositions>[] = [
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
            const position = positions.find((p) => p.preference === 1);
            return position ? `1: ${position.name}` : positions[0]?.name ?? "—";
        },
        enableGlobalFilter: true,
    },
    {
        header: ({ column }) => sortingButton("Submission Date", column),
        accessorKey: "submissionDate",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: false,
    },

];


export default columns;