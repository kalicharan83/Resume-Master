import { Form } from "react-router-dom";
import classes from "./ResumeForm.module.css";
import Input from "./Input";
import { useState } from "react";

export default function ResumeForm({userData}) {
  const [abstractRequired,setAbstractRequired]=useState(true);
  const [acheivementsRequired,setAcheivementsRequired]=useState(true);
  const [colleges,setColleges]=useState(userData&&userData.colleges?userData.colleges:[0]);
  const [softSkillsRequired,setSoftSkillsRequired]=useState(true);
  const [projects,setProjects]=useState(userData&&userData.projects?userData.projects:[0]);
  const [publications,setPublications]=useState(userData&&userData.publications?userData.publications:[0]);
  function handleAddCollege(e)
  {
    e.preventDefault();
    setColleges((prev)=> [...prev,Number(prev[(prev.length)-1])+1]);
  }
  function handleAbstractRequired(e)
  {
    e.preventDefault();
    setAbstractRequired((prev)=>!prev);
  }
  function handleAcheivementsRequired(e)
  {
    e.preventDefault();
    setAcheivementsRequired((prev)=>!prev);
  }
  function handleRemoveCollege(e,index)
  {
    e.preventDefault();
    setColleges((prev) => prev.filter((i) => i !== index));
  }
  function handleSoftSkillsRequired(e)
  {
    e.preventDefault();
    setSoftSkillsRequired((prev)=>!prev);
  }
  function handleAddProject(e)
  {
    e.preventDefault();
    setProjects((prev)=> [...prev,Number(prev[(prev.length)-1])+1]);
  }
  function handleRemoveProject(e,index)
  {
    e.preventDefault();
    setProjects((prev) => prev.filter((i) => i !== index));
  }
  function handleAddPublications(e)
  {
    e.preventDefault();
    setPublications((prev)=>[...prev,Number(prev[(prev.length)-1])+1])
  }
  function handleRemovePublications(e,index)
  {
    e.preventDefault();
    setPublications((prev) => prev.filter((i) => i !== index));
  }
  return (
    <div className={classes.container}>
      <Form method="post" className={classes.resume}>
        <h2>Contact Information</h2>
        <hr></hr>
        <div className="contact">
          <Input name="fullName" type="text" displayName="fullName" required def={userData?userData.fullName:''}></Input>
          <Input name="phoneNumber" type="text" required displayName="PhoneNumber" def={userData?userData.phoneNumber:''}></Input>
          <Input name="email" type="email" displayName="Email" required def={userData?userData.email:''}></Input>
          <Input name="linkedin" type="url" displayName="Linkedin" def={userData?userData.linkedin:''}></Input>
          <Input name="portfolio" type="url"  displayName="Portfolio Website" def={userData?userData.portfolio:''}></Input>
          <Input name="github" type="url" displayName="Github Link" def={userData?userData.github:''}></Input>
        </div>
        <div className="abstract">
        <div className={classes.heading}><h2>Summary/Abstract</h2><button onClick={handleAbstractRequired} className={classes.button}>{abstractRequired?"Remove":"Add"}</button></div>
        <hr></hr>
          <textarea rows="5" cols="122" name="abstract" def={userData?userData.abstract:''} disabled={!abstractRequired}></textarea>
        </div>
        <div className="education">
        <div className={classes.heading}><h2>Education</h2><button className={classes.button} onClick={handleAddCollege}>Add Another</button></div>
        {colleges.map((index)=>{return (<><hr type="dashed"></hr><div key={index}><button className={classes.button} onClick={(e)=>handleRemoveCollege(e,index)}>Remove this</button><br></br><Input type="text" name={`institutionName ${index}`} displayName="institutionName" def={userData?userData[`institutionName ${index}`]:''}></Input>
            <Input type="address" name={`institutionLocation ${index}`}  displayName="InstitutionLocation" def={userData?userData[`institutionLocation ${index}`]:''}></Input>
            <Input type="text" name={`degree ${index}`} displayName="Degree" def={userData?userData[`degree ${index}`]:''}></Input>
            <Input type="text" name={`graduatingYear ${index}`} displayName="GraduatingYear" def={userData?userData[`graduatingYear ${index}`]:''}></Input>
            <Input type="text" name={`cgpa ${index}`} displayName="CGPA" def={userData?userData[`cgpa ${index}`]:''}></Input></div></>)})}
        </div>
        <input value={colleges} name="colleges" hidden></input>
        <h2>Skills</h2>
        <hr></hr>
        <div className="skills">
          <Input name="technicalSkills" displayName="technicalSkills" type="text" def={userData?userData.technicalSkills:''}></Input>
          {/* <div className={classes.heading}> */}
          <button className={classes.button} onClick={handleSoftSkillsRequired}>{softSkillsRequired?"Remove SoftSkills":"Add Softskills"}</button><br></br>
          <Input name="softSkills" type="text" displayName="SoftSkills" def={userData?userData.softSkills:''} disabled={!softSkillsRequired}></Input>
          {/* </div> */}
        </div>

        <div className="projects">
        <div className={classes.heading}><h2>Projects</h2><button className={classes.button} onClick={handleAddProject}>Add Another</button></div>
        {projects.map((index)=>{return (<><hr type="dashed"></hr><div key={index}><button className={classes.button} onClick={(e)=>handleRemoveProject(e,index)}>Remove this</button><br></br>
        <Input type="text" name={`projectTitle ${index}`} displayName="projectTitle" def={userData?userData[`projectTitle ${index}`]:''}></Input>
            <Input type="text" name={`technologiesUsed ${index}`} displayName="TechnologiesUsed" def={userData?userData[`technologiesUsed ${index}`]:''}></Input>
            <Input type="text" name={`projectDesc ${index}`} displayName="ProjectDescription" def={userData?userData[`projectDesc ${index}`]:''}></Input>
            <Input type="text" name={`projectResult ${index}`} displayName="ProjectResult" def={userData?userData[`projectResult ${index}`]:''}></Input>
        </div></>)})}
        </div>
        <input value={projects} name="projects" hidden></input>
        <div className={classes.heading}><h2>Acheivements</h2><button onClick={handleAcheivementsRequired} className={classes.button}>{acheivementsRequired?"Remove":"Add"}</button></div>
        <hr></hr>
        <div className="acheivements">
            <textarea rows="4" cols="122" name="acheivements" def={userData?userData.acheivements:''} disabled={!acheivementsRequired}></textarea>
        </div>
        <div className="publications">
        <div className={classes.heading}><h2>Publications And Research</h2><button className={classes.button} onClick={handleAddPublications}>Add Another</button></div>
        
        {publications.map((index)=>{return (<><hr type="dashed"></hr><div key={index}><button className={classes.button} onClick={(e)=>handleRemovePublications(e,index)}>Remove this</button><br></br>
        <Input type="text" name={`publicationTitle ${index}`} displayName="PublicationTitle" def={userData?userData[`publicationTitle ${index}`]:''}></Input>
            <Input type="text" name={`publishedDate ${index}`} displayName="Published Date" def={userData?userData[`publishedDate ${index}`]:''}></Input>
            <label className={classes.label}>Publication Description</label><br></br>
            <textarea rows="3" cols="122" name="publicationDesc" def={userData?userData[`publicationDesc ${index}`]:''}></textarea>
        </div></>)})}

        <input value={publications} name="publications" hidden></input>

            {/* <Input type="text" name="publicationTitle" displayName="publicationTitle" def={userData?userData.publicationTitle:''}></Input>
            <Input type="text" name="publishedDate" displayName="publishedDate" def={userData?userData.publishedDate:''}></Input>
            <label className={classes.label}>Publication Description</label><br></br>
            <textarea rows="3" cols="122" name="publicationDesc" def={userData?userData.publicationDesc:''}></textarea> */}
        </div>
        <h2>Languages</h2>
        <hr></hr>
        <div className="languages">
            <Input type="text" name="languages" displayName="languages" def={userData?userData.languages:''}></Input>
        </div>
        <button className={classes.submitButton}>Submit</button>
      </Form>
    </div>
  );
}
