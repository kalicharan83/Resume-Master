import ResumeForm from "../components/ResumeForm";
import { useLoaderData } from "react-router-dom";
import { getUserDetails } from "../userData/getUserData";

export default function UpdateResume() {
  const data = useLoaderData();
  return (
    <>
      <div>
      <ResumeForm userData={data}></ResumeForm>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const userId = params.user;
  const data = getUserDetails(userId);
  return data;
}

// export async function action({ request, params }) {
//     const formData = await request.formData();
//     const uid = params.user;
//     const formDataObject = {};

//     formData.forEach((value, key) => {
//       if (!value) formDataObject[key] = null;
//       else formDataObject[key] = value;
//     });
//     formDataObject.createdResume = true;
//     await setDoc(doc(db, "resumes", uid), formDataObject);

//     return redirect(`/createResume/${uid}/preview`);
// }
