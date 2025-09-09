import TableComponent from "@/components/applicantArchive/TableComponent";
import {type ApplicationWithPositions, type PropsWithPositions} from "@/interfaces/application";
import TableColumns from "@/components/applicantArchive/TableColumns";
import {getServerSideProps} from "@/pages/api/client";
import Navbar from "@/components/shared/Navbar";
import {useEffect, useState} from "react";
import "@/styles/globals.css";
function ApplicantArchive(applications: PropsWithPositions) {

    const [applicationState, setApplicationState] = useState<ApplicationWithPositions[]>([]);

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
            <section className={"h-full w-full overflow-y-auto p-3 bg-slate-800"}>
              <TableComponent
                columns={TableColumns}
                applicationValues={applicationState}
              />
              <h1>HI</h1>
            </section>
      </>
    );
}

export {getServerSideProps};
export default ApplicantArchive;