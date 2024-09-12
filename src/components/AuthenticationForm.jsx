import { Form ,useSearchParams,Link, useNavigate} from "react-router-dom";
import classes from "./AuthenticationForm.module.css";

export default function AuthenticationForm({error})
{
    const [searchParams,setSearchParams]=useSearchParams();
    const logInMode=searchParams.get('mode')=='signup';
    const navigate=useNavigate();
    function handleCloseError()
    {
        searchParams.delete('error');
        setSearchParams(searchParams);
        if(logInMode)
            return navigate('/auth?mode=signup',{replace:true});
        else 
        return navigate('/auth',{replace:true});
    }
    return (
        <div className={classes.body}>
        <img src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg" height="500px" width="500px"></img>
        <Form method="post" className={classes.form}>
            <h2>{logInMode?'Create an Account':'SignIn to your account'}</h2>
            {error&&<div  className={classes.error}><button onClick={handleCloseError}> &#10006;</button><p>{error}</p></div>}
            <label htmlFor="email">Email</label>
            <input type='email' id="email" name="email" required></input>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password"></input>
            <button>{logInMode?"Singup":"Login"}</button>
            {!logInMode&&<p>Account doesnt exists <Link to='?mode=signup'>Singup</Link></p>}
        </Form>
        </div>
    );
}