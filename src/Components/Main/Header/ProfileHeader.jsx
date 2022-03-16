import style from "./Header.module.css";

function ProfileHeader(props) {
  return (
    <div className={style.profile_header}>
      <div className={style.title}>
        <div>GreenCosmic Study</div>
      </div>
    </div>
  );
}
export default ProfileHeader;
