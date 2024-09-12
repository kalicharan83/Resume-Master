import { redirect, useLoaderData } from "react-router-dom";
import AuthenticationForm from "../components/AuthenticationForm";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../firebase/auth";

export default function AuthenticationPage() {
  const error = useLoaderData();
  return <AuthenticationForm error={error}></AuthenticationForm>;
}

export async function loader({ request, params }) {
  const searchParams = new URL(request.url).searchParams;
  if (searchParams.get("error")) {
    return searchParams.get("error");
  }
  return null;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const logInMode = searchParams.get("mode") != "signup";
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  if (logInMode) {
    try {
      await doSignInWithEmailAndPassword(email, password);
    } catch (error) {
      return redirect(`/auth?error=${error.code}`);
    }
  } else {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
    } catch (error) {
      return redirect(`/auth?mode=signup&error=${error.code}`);
    }
  }
  return redirect("/");
}
