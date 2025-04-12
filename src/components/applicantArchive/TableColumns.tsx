import type {TableColumn} from "react-data-table-component";
import type {ApplicationWithPositions} from "@/interfaces/Application";

const columns: TableColumn<ApplicationWithPositions>[] = [
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