import classes from "./Input.module.css";

export default function Input({name,type,required,def,displayName,disabled})
{
    return(
        <>
        <label htmlFor={name} className={classes.label}>{displayName}</label>{required&&<span className={classes.required}>*</span>}
        {required&&<input type={type} required name={name} className={classes.input} defaultValue={def} id={name} disabled={disabled}></input>}
        {!required&&<input type={type} name={name} className={classes.input} defaultValue={def} id={name} disabled={disabled}></input>}
        {/* default all input fields are required later I am going to change  */}
        </>
    );
}