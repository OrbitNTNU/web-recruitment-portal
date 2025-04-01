import TableComponent from "@/components/applicantArchive/TableComponent";
import mockValues from "@/interfaces/mockValues.json";
import {type ApplicationValues} from "@/interfaces/application";

export default function ApplicantArchive() {

    return(
        <section className={"w-full h-full  overflow-y-auto  "}>
            <TableComponent applicationValues={mockValues.data as ApplicationValues[]}/>
        </section>
    )
}

