import classes from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import { getUserDetails } from "../userData/getUserData";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function HomePage() {
  const [userData, setUserData] = useState(null);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  function handleCreateResume() {
    if (currentUser) navigate(`/createResume/${currentUser.uid}`);
    else navigate("/auth");
  }
  function handleUpdateResume() {
    if (currentUser) navigate(`/update/${currentUser.uid}`);
    else navigate("/auth");
  }
  useEffect(() => {
    async function isResumeExists() {
      let userResumeStatus = false;
      if (currentUser) userResumeStatus = await getUserDetails(currentUser.uid);
      setUserData(userResumeStatus);
    }
    isResumeExists();
  }, [userData]);
  return (
    <>
      <div className={classes.firstSection}>
        <div className={classes.text}>
          <h1>Welcome to</h1>
          <h2>Resume Master</h2>
          <h3>
            Your one-stop solution to create professional resume effortlessly.
          </h3>
          <div className={classes.buttonGroup}>
            {!userData && (
              <button onClick={handleCreateResume}>Create Your Resume</button>
            )}
            {userData &&
              (userData.createdResume ? (
                <button onClick={handleUpdateResume}>Update Your Resume</button>
              ) : (
                <button onClick={handleCreateResume}>Create Your Resume</button>
              ))}
          </div>
        </div>
        <div>
          <img
            src="https://i0.wp.com/smashresume.com/wp-content/uploads/edd/2018/01/Creative-Cartoon-Resume.jpg?resize=150150&ssl=1"
            className={classes.image}
          ></img>
        </div>
      </div>
      <div className={classes.secondSection}>
        <div className={classes.info}>
          <img
            src="https://cdn.dribbble.com/users/1474096/screenshots/5724682/media/f771d71600bc3cbabf50ac9908d33505.jpg?resize=400x300&vertical=center"
            height="150px"
            width="150px"
          ></img>
          <h3>Intuitive Interface</h3>
          <p>
            Navigate through the resume building process effortlessly with our
            user-friendly interface. Whether you are tech-savvy or a beginner,
            creating a professional resume has never been easier.
          </p>
        </div>
        <div className={classes.info}>
          <img
            src="https://img.freepik.com/free-vector/flat-illustration-people-looking-up_23-2148981318.jpg"
            height="150px"
            width="150px"
          ></img>
          <h3>Real-time Collaboration</h3>
          <p>
            Work together with friends, mentors, or career coaches in real-time.
            Share your resume and get instant feedback to ensure your
            application stands out from the crowd."
          </p>
        </div>
        <div className={classes.info}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/585/473/original/illustration-graphic-cartoon-character-of-cyber-security-vector.jpg"
            height="150px"
            width="150px"
          ></img>
          <h3>Data Privacy and Security</h3>
          <p>
            Your personal information is safe with us. We prioritize your data
            privacy and use advanced security measures to ensure that your data
            remains confidential and secure.
          </p>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </>
  );
}
