import type {ApplicationWithPositions, Member, Comment} from "@/interfaces/application";
import SelectMemberCombo from "@/components/ApplicantArchive/shared/SelectMemberCombo";
import CommentBox from "@/components/ApplicantArchive/shared/CommentBox";

interface ExpandableComponentProps {
    allMember: Member[];
    data: ApplicationWithPositions;
    comment: Comment;
}

export const ExpandableComponent = ({allMember, data,comment}: ExpandableComponentProps) => (
  <div className="grid-cols grid gap-1 p-4 text-lg">
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
        <span className="font-bold">Description: </span>{" "}
        {data.description}
      </p>
    </section>
      <section className={"flex w-full flex-row gap-8"}>
    <SelectMemberCombo members={allMember}></SelectMemberCombo>
    <CommentBox comment={comment}></CommentBox>
      </section>
  </div>
);