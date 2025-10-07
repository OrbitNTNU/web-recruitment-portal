import type { ApplicationWithPositions } from "@/interfaces/application";
import type { ColumnDef } from "@tanstack/react-table";
import React, { type Dispatch, type SetStateAction } from "react";

interface ColumnsChoiseProps {
    columns: ColumnDef<ApplicationWithPositions>[],
    chosenColumns: string[],         // AccessorKeys of the ColumnDef
    setChosenColumns: Dispatch<SetStateAction<string[]>>,
    closeFunction: Dispatch<SetStateAction<boolean>>,
}

const ColumnsChoice = ({
    columns, chosenColumns, setChosenColumns, closeFunction
}: ColumnsChoiseProps) => {
    
    return (
        <section className="flex flex-col h-full w-full pt-8 rounded-lg border-2 border-white bg-slate-800 text-white p-4 gap-4">
            <>
            <h1 className="text-3xl">Choose columns</h1>
            <div className="w-full border-b border-gray-400"></div>
            <section className="flex flex-col h-full overflow-y-auto gap-4">
                {columns.map((column) => {
                    const accessorKey = "accessorKey" in column ? column.accessorKey : "";
                    let checked = chosenColumns.includes(accessorKey);
                    
                    return (
                        <button
                        className={`flex border p-2 ${checked ? "bg-green-600 border-green-600 hover:border-red-400 hover:bg-green-600/80" : "hover:border-green-600"}`} key={accessorKey}
                        onClick={() => {
                            if (checked) {
                                setChosenColumns(chosenColumns.filter(key => key !== accessorKey))
                            } else {
                                setChosenColumns([...chosenColumns, accessorKey]);
                            }
                            checked = !checked;
                        }}
                        >
                            {accessorKey}
                        </button>
                    );
                })}
            </section>
            </>
            <div className="flex justify-end">
                <button
                    className="flex flex-row justify-center items-center border py-2 px-4 hover:border-red-400"
                    onClick={() => closeFunction(false)}
                >
                    Close
                </button>
            </div>
        </section>
    )
}

export default ColumnsChoice;