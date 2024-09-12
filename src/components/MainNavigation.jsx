import { Link, redirect, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useAuth } from "../contexts/authContext";
import { doSignOut } from "../firebase/auth";

export default function MainNavigation()
{
    const {currentUser}=useAuth();
    const navigate=useNavigate();
    // console.log(currentUser);
    function handleLogout()
    {
        doSignOut();
        return navigate('/');
    }
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to="/" className={classes.link}>
                <img src="../../public/logo.png" className={classes.headerImage}></img>
                {/* <span className={classes.logoTitle}>Resume Master</span> */}
                </Link>
            </div>
            <div className={classes.links}>
                {!currentUser&&<button><Link to='/auth'>Login</Link></button>}
                {currentUser&&<button onClick={handleLogout}>Logout</button>}
                <button><Link to='/contactus'>Contact us</Link></button>
            </div>
        </header>
    );
}