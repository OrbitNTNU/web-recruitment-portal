import TableComponent from "@/components/ApplicantArchive/table/TableComponent";
import {type ApplicationWithPositions, type PropsWithPositions} from "@/interfaces/application";
import {
    allColumns,
    type CustomColumnDef,
    findRelColumns
} from "@/components/ApplicantArchive/table/TableColumns";
import ColumnsChoice from "@/components/ApplicantArchive/shared/ColumnsChoice";
import {getServerSideProps} from "@/api/client";
import Navbar from "@/components/Shared/Navbar";
import {useEffect, useState} from "react";
import "@/styles/globals.css";
import { useSessionStorageSync, useTableStore } from "@/stores/UseTableStore";
import { AnimatePresence, motion } from "framer-motion";


function ApplicantArchive(applications: PropsWithPositions) {

    const { columns, setColumns } = useTableStore();

    const [applicationState, setApplicationState] = useState<ApplicationWithPositions[]>([]);
    const [relColumns, setRelColumns] = useState<CustomColumnDef<ApplicationWithPositions>[]>([]);
    const [columnsChoiseVisible, setColumnsChoiceVisible] = useState<boolean>(false);

    useSessionStorageSync();

    useEffect(() => {
        setRelColumns(findRelColumns(columns));
    }, [columns]);

    useEffect(() => {

        if (applications && Array.isArray(applications.applications)) {
            const applicationArray: ApplicationWithPositions[] = [];

            applications.applications.map((application) => {
                const appWithPositions: ApplicationWithPositions = {
                    name: application.name,
                    personalEmail: application.personalEmail,
                    ntnuUsername: application.ntnuUsername,
                    phoneNumber: application.phoneNumber,
                    fieldOfStudy: application.fieldOfStudy,
                    yearOfStudy: application.yearOfStudy,
                    experience: application.experience,
                    description: application.description,
                    submissionDate: application.submissionDate,
                    saveApplication: application.saveApplication,
                    positions: [{
                        preference: 3,
                        name: "Analyitcs",
                        teamId: "4"
                    },{
                        preference: 2,
                        name: "DevOps",
                        teamId: "1"
                    },{
                        preference: 1,
                        name: "WebTeam",
                        teamId: "2"
                    }]
                };

                applicationArray.push(appWithPositions);
            })
            setApplicationState(applicationArray);
        }
    }, [applications]);

    return (
      <>
        <AnimatePresence>
        {columnsChoiseVisible &&
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut"}}
                className="fixed inset-0 z-10 flex justify-end p-4 h-full w-full bg-black/50"
                onClick={() => setColumnsChoiceVisible(false)}
            >
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut"}}
                    className="flex h-full sm:w-[300px] w-full"
                    onClick={(e) => e.stopPropagation()}
                >
                    <ColumnsChoice
                        columns={allColumns}
                        chosenColumns={columns}
                        setChosenColumns={setColumns}
                        closeFunction={setColumnsChoiceVisible}
                    />
                </motion.div>
            </motion.div>
        }
        </AnimatePresence>
        <section className={"h-full w-full overflow-y-auto p-3 bg-slate-800"}>
            <button
                className="border text-white p-2 hover:bg-gray-400/15"
                onClick={() => setColumnsChoiceVisible(true)}
            >
                Choose visible columns
            </button>
            <TableComponent
                columns={relColumns}
                applicationValues={applicationState}
            />
            <h1>HI</h1>
        </section>
      </>
    );
}

export {getServerSideProps};
export default ApplicantArchive;