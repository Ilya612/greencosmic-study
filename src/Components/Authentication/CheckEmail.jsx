import style from "./Authentication.module.css";
import emailIcon from "../../Assets/Email/mark_email_read_black_24dp.svg";
function CheckEmail() {
  return (
    <div className={style.emailContainer}>
      <div className={style.text}>
        We sent a message to your Email adress. Please check it and confirm your
        Email adress
      </div>
      <div className={style.icon}>
        <img width={60} alt="" src={emailIcon} />
      </div>
    </div>
  );
}
export default CheckEmail;
