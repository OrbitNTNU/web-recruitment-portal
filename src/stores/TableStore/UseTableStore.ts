import { create } from "zustand";
import { useEffect } from "react";

interface TableValues {
    columns: string[];
    setColumns: (columns: string[]) => void;
}

const SESSIONSTORAGE_NAME = "tableState";

export const useTableStore = create<TableValues>((set) => ({
    columns: [
        "ID",
        "Full Name",
        "Field of Study",
        "Year of Study",
        "Positions",
        "Submission Date"
    ],
    setColumns: (columns) => set({ columns }),
}));

const loadState = (): Partial<TableValues> => {
    if (typeof window === "undefined") return {}

    const savedState = sessionStorage.getItem(SESSIONSTORAGE_NAME);
    return savedState ? (JSON.parse(savedState) as Partial<TableValues>) : {};
}

export const useSessionStorageSync = () => {
    const tableState = useTableStore();

    useEffect(() => {
        const savedState = loadState();
        useTableStore.setState(savedState);
    }, []);

    useEffect(() => {
        sessionStorage.setItem(SESSIONSTORAGE_NAME, JSON.stringify(tableState));
    }, [tableState]);
}