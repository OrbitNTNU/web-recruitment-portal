import { getServerSideProps } from "@/pages/client";
import type {  Props } from "@/interfaces/Application";

function HelloPage({ applications }: Props) {
  return (
    <div>
      <h1>Applications</h1>
      {applications && applications.length > 0 ? (
        <ul>
          {applications.map((application, index) => (
            <li key={index}>
              <h2>{application.name}</h2>
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
    </div>
  );
}

export { getServerSideProps };
export default HelloPage;
