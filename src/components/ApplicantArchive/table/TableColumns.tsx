
import type {ApplicationWithPositions} from "@/types/application";
import type {Position} from "@/types/position";
import type {Column, ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/UI/button";
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

export type CustomColumnDef<ApplicationWithPositions> = ColumnDef<ApplicationWithPositions> & {
    meta: {
      displayName: string;
    };
};

export const allColumns: CustomColumnDef<ApplicationWithPositions>[] = [
    {
        header: ({ column }) => sortingButton("ID", column),
        accessorKey: "ID",
        cell: (info) => info.getValue<number>(),
        enableGlobalFilter: true,
        meta: {
            displayName: "ID",
        }
    },
    {
        header: ({ column }) => sortingButton("Full Name", column),
        accessorKey: "name",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
        meta: {
            displayName: "Full Name",
        }
    },
    {
        header: ({ column }) => sortingButton("Field of Study", column),
        accessorKey: "fieldOfStudy",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
        meta: {
            displayName: "Field of Study",
        },
    },
    {
        header: ({ column }) => sortingButton("Year of Study", column),
        accessorKey: "yearOfStudy",
        cell: (info) => info.getValue<number>(),
        enableGlobalFilter: false,
        meta: {
            displayName: "Year of Study",
        },
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
        meta: {
            displayName: "Positions",
        },
    },
    {
        header: ({ column }) => sortingButton("Submission Date", column),
        accessorKey: "submissionDate",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: false,
        meta: {
            displayName: "Submission Date",
        },
    },
    {
        header: ({ column }) => sortingButton("Experience", column),
        accessorKey: "experience",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
        meta: {
            displayName: "Experience",
        },
    },
    {
        header: ({ column }) => sortingButton("Description", column),
        accessorKey: "description",
        cell: (info) => info.getValue<string>(),
        enableGlobalFilter: true,
        meta: {
            displayName: "Description",
        },
    },

];

export function findRelColumns(chosenColumns: string[]) {
    return allColumns.filter((column) => {
        const columnName = column.meta?.displayName;
        return chosenColumns.includes(columnName);
    });
}


export default allColumns;