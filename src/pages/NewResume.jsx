import { redirect, useNavigate } from "react-router-dom";
import ResumeForm from "../components/ResumeForm";
import { useAuth } from "../contexts/authContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export default function NewResume() {
  const { currentUser } = useAuth();
  return <>{currentUser ? <ResumeForm></ResumeForm> : "Please Login First"}</>;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const uid = params.user;
  const formDataObject = {};

  formData.forEach((value, key) => {
    if (!value) formDataObject[key] = null;
    else if(key=="colleges")
    {
      let arr=value.split(",");
      arr.forEach((val)=>val);
      formDataObject[key]=arr;
    }
    else if(key=="projects")
    {
      let arr=value.split(",");
      arr.forEach((val)=>val);
      formDataObject[key]=arr;
    }
    else if(key=="publications")
    {
      let arr=value.split(",");
      arr.forEach((val)=>val);
      formDataObject[key]=arr;
    }
    else formDataObject[key] = value;
  });
  formDataObject.createdResume = true;
  await setDoc(doc(db, "resumes", uid), formDataObject);

  return redirect(`/createResume/${uid}/preview`);
}
