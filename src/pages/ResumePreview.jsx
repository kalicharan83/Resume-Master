import { useLoaderData } from "react-router-dom";
import ResumeTemplate from "../components/ResumeTemplate";
import { getUserDetails } from "../userData/getUserData";
import { generatePDF } from "../userData/generatePdf";

export default function ResumePreview() {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div id="resume" style={{ padding: "20px", background: "#fff" }}>
        <ResumeTemplate userData={data}></ResumeTemplate>
      </div>
      <button onClick={() => generatePDF("resume")}>Save</button>
    </>
  );
}
export async function loader({ params }) {
  const userId = params.user;
  const data = getUserDetails(userId);
  return data;
}
