import type { Props } from "@/interfaces/clientProps";
import {getServerSideProps} from "@/pages/client";

function HelloPage({ helloMessage, goodbyeMessage }: Props) {
  return (
    <div>
      <h1>x{helloMessage}</h1>
      <h2>y{goodbyeMessage}</h2>
    </div>
  );
}
export { getServerSideProps };
export default HelloPage;