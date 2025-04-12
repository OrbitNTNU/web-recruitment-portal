import {ExpandableRowsComponent} from "react-data-table-component/dist/DataTable/types";
import {ApplicationWithPositions} from "@/interfaces/Application";
import SelectMemberCombo from  "@/components/applicantArchive/SelectMemberCombo";

interface Member {
    name: string
}

/*Mockvalues the member, the idea is to gather the members only once when rendering the table, so you don't
* fetch all the memberes for every ExtendableComponent*/
const member1: Member = {name: "Wasabiy"};
const member2: Member = {name: "Hanna"};
const member3: Member = {name: "Bana Nana"};
const allMembers:Member[] = [member1, member2,member3];


const ExpandableComponent: ExpandableRowsComponent<ApplicationWithPositions> = ({
  data,
}: {
  data: ApplicationWithPositions;
}) => (
  <div className="grid-cols grid gap-1 p-4 text-sm " >
    <section className={"flex w-full flex-row gap-8"}>
      <p>
        <span className="font-bold">Full Name: </span> {data.name}
      </p>

      <p>
        <span className="font-bold">E-Mail: </span> {data.personalEmail}
      </p>

      <p>
        <span className="font-bold">Phone Number: </span> {data.phoneNumber}
      </p>
    </section>
    <section className={"flex w-full flex-row gap-8"}>
      <p>
        <span className="font-bold">Field of Study: </span> {data.fieldOfStudy}
      </p>
      <p>
        <span className="font-bold">Year of Study: </span>
        {data.yearOfStudy}
      </p>
      <p>
        <span className="font-bold">Application priority: </span>{" "}
        {data.positions
          .map((value) => value.preference + ": " + value.name)
          .join(", ")}
      </p>
    </section>
    <section className={"flex w-full flex-row gap-8"}>
      <p>
        <span className="font-bold">Previous Experience: </span>{" "}
        {data.experience}
      </p>
      <p>
        <span className="font-bold">Hobbies and Personal: </span>{" "}
        {data.description}
      </p>
    </section>
    <SelectMemberCombo members={allMembers}></SelectMemberCombo>
  </div>
);
export default ExpandableComponent;