
import {DataTable} from "@/components/ui/data-table";
import {type ColumnDef} from "@tanstack/react-table";
import {type ApplicationWithPositions} from "@/interfaces/application";

interface TableComponentProps {
  applicationValues: ApplicationWithPositions[];
  columns?: ColumnDef<ApplicationWithPositions>[];
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

