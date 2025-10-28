
import {DataTable} from "@/components/applicantArchive/table/ui/data-table";
import { type CustomColumnDef } from "./TableColumns";
import {type ApplicationWithPositions} from "@/interfaces/application";

interface TableComponentProps {
  applicationValues: ApplicationWithPositions[];
  columns?: CustomColumnDef<ApplicationWithPositions>[];
}


export default function TableComponent({
  applicationValues,
  columns,
}: TableComponentProps) {
  return (
    <DataTable
      columns={columns!}
      data={applicationValues}
    />
  );
}

