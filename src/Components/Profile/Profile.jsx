import { useState } from "react";
import style from "../Authentication/Authentication.module.css";
import decoration from "../../Assets/Decorations/relax.svg";
import { NavLink } from "react-router-dom";

function Profile(props) {
  const [username, setUsername] = useState(props.username);
  const [city, setCity] = useState(props.city);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);
  const [birthday, setBirthday] = useState(props.birthday);
  const [linkFacebook, setLinkFacebook] = useState(props.linkFacebook);
  const [linkLinkedIn, setLinkLinkedIn] = useState(props.linkLinkedIn);
  const [linkInstagram, setLinkInstagram] = useState(props.linkInstagram);

  return (
    <div>
      <div className={style.container}>
        <div className={style.customContainer}>
          <div className={style.login_container}>
            <div className={style.registration}>
              <div className={style.title}>Profile</div>
              <div className={style.input}>
                <div>Username</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={username}
                      onInput={(evt) => setUsername(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.input}>
                <div>City</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={city}
                      onInput={(evt) => setCity(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.input}>
                <div>Phone Number</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={phoneNumber}
                      onInput={(evt) => setPhoneNumber(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.input}>
                <div>Birthday</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={birthday}
                      onInput={(evt) => setBirthday(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.input}>
                <div>Link to Facebook</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={linkFacebook}
                      onInput={(evt) => setLinkFacebook(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.input}>
                <div>Link to LinkedIn</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={linkLinkedIn}
                      onInput={(evt) => setLinkLinkedIn(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.input}>
                <div>Link to Instagram</div>
                <div className={style.inputContainer}>
                  <div className={style.customInput}>
                    <input
                      value={linkInstagram}
                      onInput={(evt) => setLinkInstagram(evt.target.value)}
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className={style.buttonContainer}>
                <button
                  onClick={() => {
                    props.saveChanges({
                      username,
                      city,
                      phoneNumber,
                      birthday,
                      linkFacebook,
                      linkLinkedIn,
                      linkInstagram,
                    });
                  }}
                  className={style.button}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div>
          <img className={style.img} src={decoration} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Profile;
