import type {TableColumn} from "react-data-table-component";
import type {ApplicationValues} from "@/interfaces/application";

const columns: TableColumn<ApplicationValues>[] = [
    {
        name: "Full Name",
        selector: (row: ApplicationValues) => row.fullName,
        sortable: true,
    },
    {
        name: "E-Mail",
        selector: (row: ApplicationValues) => row.emailAddress,
    },
    {
        name: "Field of Study",
        selector: (row: ApplicationValues) => row.fieldOfStudy,
        sortable: true,
    },
    {
        name: "Year of Study",
        selector: (row: ApplicationValues) => row.yearOfStudy,
        sortable: true,
    },
    {
        name: "Phone Number",
        selector: (row: ApplicationValues) => row.phoneNumber,
    },
    {
        name: "Positions",
        selector: (row: ApplicationValues) => "1: "+
            row.position.find((position) => position.preference == 1)!.name
        ,sortable: true,
    },
    {
        name: "Submission Date",
        selector: (row: ApplicationValues) => row.submissionDate,
        sortable: true,
    },

];

export default columns;