import { Input } from "@/components/ui/input";
import { type Table } from "@tanstack/react-table";
import { Search } from "lucide-react";

interface SearchComponentProps<TData> {
  table: Table<TData>;
}

function SearchComponent<TData>({ table }: SearchComponentProps<TData>) {
  return (
    <div className="flex  h-8 w-fit items-center rounded-md border border-white py-4 text-white">
      <Search></Search>
      <Input
        placeholder="Filter on name, study or team..."
        value={(table.getState().globalFilter as string) ?? ""}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
        className="max-w-sm !border-none ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
      ></Input>
    </div>
  );
}

export default SearchComponent;
