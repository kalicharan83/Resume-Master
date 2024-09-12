import { generatePDF } from "../userData/generatePdf";
import classes from "./ResumeTemplate.module.css";

export default function ResumeTemplate({ userData }) {
  return (
    <>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1>{userData.fullName}</h1>
          <div className={classes.info}>
            <div className={classes.phone}>
              <img
                className={classes.phone}
                src="https://img.icons8.com/?size=100&id=9730&format=png&color=000000"
              ></img>
              <p className={classes.phone}>{userData.phoneNumber}</p>
            </div>
            <div className={classes.mail}>
              <img
                src="https://img.icons8.com/?size=100&id=53435&format=png&color=000000"
                className={classes.mail}
              ></img>
              <p className={classes.mail}>{userData.email}</p>
            </div>
            <div className={classes.linkedin}>
              <img
                className={classes.linkedin}
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
              ></img>
              <p className={classes.linkedin}>{userData.linkedin}</p>
            </div>
            <div className={classes.portfolio}>
              <img
                className={classes.portfolio}
                src="https://img.icons8.com/?size=100&id=87836&format=png&color=000000"
              ></img>
              <p className={classes.portfolio}>{userData.portfolio}</p>
            </div>
            <div className={classes.github}>
              <img
                className={classes.github}
                src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
              ></img>
              <p className={classes.github}>{userData.github}</p>
            </div>
          </div>
        </header>
        <main>
          {userData.abstract && (
            <>
              <h2>Summary</h2>
              <hr></hr>
              <div>
                <p>{userData.abstract}</p>
              </div>
            </>
          )}

          <h2>Education</h2>
          <hr></hr>
          <div>
            {userData.colleges.map((index) => {
              return (
                <>
                  <p>
                    <strong>{userData[`institutionName ${index}`]}</strong>
                  </p>{" "}
                  <p>{userData[`graduatingYear ${index}`]}</p>
                  <p>{userData[`institutionLocation ${index}`]}</p>
                  <p>{userData[`degree ${index}`]}</p>
                  <p>{userData[`cgpa ${index}`]}</p>
                </>
              );
            })}
            {/* <p><strong>{userData.institutionName}</strong></p>                             <p>{userData.graduatingYear}</p>
            <p>{userData.institutionLocation}</p>
            <p>{userData.degree}</p>
            <p>{userData.cgpa}</p> */}
          </div>

          {userData.technicalSkills || userData.softSkills ? (
            <>
              <h2>Skills</h2>
              <hr></hr>
              <div>
                {userData.technicalSkills && (
                  <p>
                    <strong>Technical Skills:</strong>
                    {userData.technicalSkills}
                  </p>
                )}
                {userData.softSkills && (
                  <p>
                    <strong>Soft Skills:</strong>
                    {userData.softSkills}
                  </p>
                )}
              </div>
            </>
          ) : (
            <></>
          )}

          {userData.projects && (
            <>
              <h2>Projects</h2>
              <hr></hr>
              <div>
                {userData.projects.map((index) => {
                  return (
                    <>
                      <p>
                        <strong>{userData[`projectTitle ${index}`]}</strong>
                      </p>
                      <p>
                        <strong>Technologies used:</strong>
                        {userData[`technologiesUsed ${index}`]}
                      </p>
                      <p>{userData[`projectDesc ${index}`]}</p>
                      <p>{userData[`projectResult ${index}`]}</p>
                    </>
                  );
                })}
              </div>
            </>
          )}

          {/* <div>
            <p><strong>{userData.projectTitle}</strong></p>
            <p><strong>Technologies used:</strong>{userData.technologiesUsed}</p>
            <p>{userData.projectDesc}</p>
            <p>{userData.projectResult}</p>
        </div> */}

          {userData.acheivements && (
            <>
              <h2>Acheivements</h2>
              <hr></hr>
              <div>{userData.acheivements}</div>
            </>
          )}

          {userData.publications && (
            <>
              <h2>Publications and Research</h2>
              <hr></hr>
              <div>
                {userData.publications.map((index) => {
                  return (
                    <>
                      <p>
                        <strong>{userData[`publicationTitle ${index}`]}</strong>
                      </p>
                      <p>
                        <strong>Published Date:</strong>
                        {userData[`publishedDate ${index}`]}
                      </p>
                      <p>{userData[`publicationDesc ${index}`]}</p>
                    </>
                  );
                })}
              </div>
            </>
          )}

          <h2>Languages</h2>
          <hr></hr>
          <p>{userData.languages}</p>
        </main>
      </div>
    </>
  );
}
