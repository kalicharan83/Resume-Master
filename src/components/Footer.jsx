import classes from "./Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <p>
          Crafted with Care | © 2024 <strong>Resume master</strong>
        </p>
        <p>Your journey to career success starts here. Need help?</p>
        <p>
          <a href="#">Contact Us</a> |<a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a>
        </p>
      </footer>
    </>
  );
}
