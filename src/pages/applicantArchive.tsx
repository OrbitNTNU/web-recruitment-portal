import TableComponent from "@/components/applicantArchive/TableComponent";
import {type ApplicationWithPositions, type PropsWithPositions} from "@/interfaces/application";
import TableColumns, { allColumns, columns } from "@/components/applicantArchive/TableColumns";
import ColumnsChoice from "@/components/applicantArchive/ColumnsChoice";
import {getServerSideProps} from "@/pages/api/client";
import Navbar from "@/components/shared/Navbar";
import {useEffect, useState} from "react";
import "@/styles/globals.css";
import { type ColumnDef } from "@tanstack/react-table";


function ApplicantArchive(applications: PropsWithPositions) {

    const [applicationState, setApplicationState] = useState<ApplicationWithPositions[]>([]);
    const [relColumns, setRelColumns] = useState<ColumnDef<ApplicationWithPositions>[]>([]);
    const [columnsChoiseVisible, setColumnsChoiceVisible] = useState<boolean>(false);
    const [chosenColumns, setChosenColumns] = useState<string[]>([
        "ID",
        "name",
        "fieldOfStudy",
        "yearOfStudy",
        "positions"
    ]);

    useEffect(() => {
        setRelColumns(columns(chosenColumns));
    }, []);

    useEffect(() => {
        setRelColumns(columns(chosenColumns));
    }, [chosenColumns]);

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
        <Navbar></Navbar>
        {columnsChoiseVisible &&
        <section
            className="fixed inset-0 z-10 flex justify-end p-4 h-full w-full bg-black/50"
            onClick={() => setColumnsChoiceVisible(false)}
        >
            <div className="flex h-full w-[30%]" onClick={(e) => e.stopPropagation()}>
                <ColumnsChoice
                    columns={allColumns}
                    chosenColumns={chosenColumns}
                    setChosenColumns={setChosenColumns}
                    closeFunction={setColumnsChoiceVisible}
                />
            </div>
        </section>
        }
        <section className={"h-full w-full overflow-y-auto p-3 bg-slate-800"}>
            <button
                className="border text-white p-2 hover:bg-gray-400/15"
                onClick={() => setColumnsChoiceVisible(true)}
            >
                Customize columns
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