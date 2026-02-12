import { getServerSideProps } from "@/api/client";
import type { Props } from "@/types/application";

function HelloPage({ applications }: Props) {
  return (
    <section>
      <h1>Applications</h1>
      {applications && applications.length > 0 ? (
        <ul>
          {applications.map((application, index) => (
            <li key={index}>
              <h3>{application.name}</h3>
              <p>Email: {application.personalEmail}</p>
              <p>NTNU Username: {application.ntnuUsername}</p>
              <p>Phone: {application.phoneNumber}</p>
              <p>Field of Study: {application.fieldOfStudy}</p>
              <p>Year of Study: {application.yearOfStudy}</p>
              <p>Experience: {application.experience}</p>
              <p>Description: {application.description}</p>
              <p>Submission Date: {application.submissionDate}</p>
              <p>Saved: {application.saveApplication ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications found.</p>
      )}
      <article></article>
    </section>
  );
}

export { getServerSideProps };
export default HelloPage;
