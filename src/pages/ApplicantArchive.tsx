import TableComponent from "@/components/applicantArchive/TableComponent";
import mockValues from "@/interfaces/mockValues.json";
import {type ApplicationValues} from "@/interfaces/application";
import TableColumns from "@/components/applicantArchive/TableColumns";

export default function ApplicantArchive() {

    return(
        <section className={"w-fit h-fit overflow-y-auto  "}>
            <TableComponent columns={TableColumns} applicationValues={mockValues.data as ApplicationValues[]}/>
          <h1>HI</h1>
        </section>
    )
}

