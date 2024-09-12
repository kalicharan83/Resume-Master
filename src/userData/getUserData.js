import {db} from "../firebase/firebaseConfig";
import {doc,getDoc} from "firebase/firestore";

export async function getUserDetails(userid)
{
    const details= await getDoc(doc(db,"resumes",userid));
    if(details.exists())
    {
        return details.data();
    }
    else
    return null;
}