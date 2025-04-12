
import TableColumns from "@/components/applicantArchive/TableColumns";
import ExpandableComponent from "@/components/applicantArchive/ExpandableComponent";
import {ApplicationWithPositions} from "@/interfaces/Application";
import {DataTable} from "@/components/ui/data-table";

interface TableComponentProps {
    applicationValues: ApplicationWithPositions[]
}


export default function TableComponent({ applicationValues }: TableComponentProps) {

  return (
    <DataTable
      columns={TableColumns}
      data={applicationValues}
      pagination
      highlightOnHover
      pointerOnHover
      striped
      expandableRows
      expandOnRowClicked
      expandableRowsComponent={ExpandableComponent}
      expandableRowsHideExpander
    />
  );
}
