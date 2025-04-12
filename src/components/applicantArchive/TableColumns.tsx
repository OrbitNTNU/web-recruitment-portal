import type {TableColumn} from "react-data-table-component";
import type {ApplicationWithPositions} from "@/interfaces/application";
import type {Position} from "@/interfaces/position";
import { ColumnDef } from "@tanstack/react-table";


export const columns: ColumnDef<ApplicationWithPositions>[] = [
    {
        header: "Full Name",
        accessorKey: "name",
        cell: (info) => info.getValue<string>(),
        enableSorting: true,
    },
    {
        header: "E-Mail",
        accessorKey: "personalEmail",
        cell: (info) => info.getValue<string>(),
    },
    {
        header: "Field of Study",
        accessorKey: "fieldOfStudy",
        cell: (info) => info.getValue<string>(),
        enableSorting: true,
    },
    {
        header: "Year of Study",
        accessorKey: "yearOfStudy",
        cell: (info) => info.getValue<number>(),
        enableSorting: true,
    },
    {
        header: "Positions",
        accessorKey: "position",
        cell: (info) => {
            const positions = info.getValue() as Position[];
            const position = positions.find((position) => position.preference === 1);
            return position ? `1: ${position.name}` : positions[0]!.name;
        },
        enableSorting: true,
    },
    {
        header: "Submission Date",
        accessorKey: "submissionDate",
        cell: (info) => info.getValue<string>(),
        enableSorting: true,
    },

];


const TColumns: TableColumn<ApplicationWithPositions>[] = [
    {
        name: "Full Name",
        selector: (row: ApplicationWithPositions) => row.name,
        sortable: true,
    },
    {
        name: "Field of Study",
        selector: (row: ApplicationWithPositions) => row.fieldOfStudy,
        sortable: true,
    },
    {
        name: "Year of Study",
        selector: (row: ApplicationWithPositions) => row.yearOfStudy,
        sortable: true,
    },
    {
        name: "Submission Date",
        selector: (row: ApplicationWithPositions) => row.submissionDate,
        sortable: true,
    },
    {
        name: "Preference",
        selector: (row: ApplicationWithPositions) =>
            row.positions?.find(value => value.preference == 1)?.name ?? "None" ,
        sortable: true,
    },
];
export default columns;